import { storeToRefs } from "pinia";
import useIndex from "~~/composables/useIndex";
import useMenuNavbar from "~/composables/useMenuNavbar";

export function logError<TypeError extends Error>(error: TypeError): TypeError {
    let name = error.name, message = error.message;
    console.error(name, message);
    return error;
}

export async function apiFetch<ResponseType>(url: string, opts?: RequestInit): Promise<ResponseType> {
    const response = await fetch(`/api${url}`, opts);

    if ( !response.ok ) createError(`${response.status}: ${response.statusText}`);

    return await response.json() as ResponseType;
}

export async function* apiFetchDataProgress(url: string, opts?: RequestInit) {
    try {
        const response = await fetch(`/api${url}`, opts);

        if ( typeof response.body?.getReader === "undefined" ) throw Error("GetDataProgress - Reader isn`t defined");

        const reader = response.body.getReader();
        const contentLength = response.headers.get("Content-Length");
        if ( contentLength === null ) throw new Error("Content-Length is null");
        
        let nowLength = 0, chunks: Uint8Array[] = [];

        while(true) {
            const { done, value } = await reader.read();
            if ( done ) break;
            if ( value ) {
                chunks.push(value);
                nowLength += value.length;
            }
            yield [ nowLength, +contentLength ];
        }

        const allChunks = new Uint8Array(nowLength);
        let position = 0;

        for ( let chunk of chunks ) {
            allChunks.set(chunk, position);
            position += chunk.length;
        }

        const decoder = new TextDecoder("utf-8");
        const result = decoder.decode(allChunks);

        return result;
    } catch(error) {
        logError(error as Error);
        return "";
    }
}

interface DeviceMedia {
    [key: string]: string;
}

interface DeviceFunctions {
    [key: string]: (() => void)[]
}

const deviceMedia = Object.freeze<DeviceMedia>({
    narrowMobile: "(max-width: 680px)",
    mobile: "(max-width: 751px)",
    middleDevice: "(min-width: 751px) and (max-width: 1280px)"
});

const getDeviceFunctions = () => {
    const indeStore = useIndex();
    const {
        setNarrowMobileTrue,
        setIsMiddleDeviceFalse,
        setMobileTrue,
        setMobileFalse,
        setMiddleDeviceTrue,
        setNarrowMobileFalse
    } = indeStore;

    return Object.freeze<DeviceFunctions>({
        narrowMobile: [ setNarrowMobileTrue, setNarrowMobileFalse ],
        mobile: [ setMobileTrue, setMobileFalse ],
        middleDevice: [ setMiddleDeviceTrue, setIsMiddleDeviceFalse ]
    });
}

export function setMatchMedia() {
    for ( let [ key, value ] of Object.entries(deviceMedia) ) {
        const matches = matchMedia(value).matches;
        const deviceFunctions = getDeviceFunctions();
        if ( matches ) deviceFunctions[key][0]();
        else deviceFunctions[key][1]();
    }
}

export function callSetIsPointerOnDocumentFalse<TypeFn extends Function>(fn: TypeFn): Function  {
    const indeStore = useIndex();
    const { setPointerOnDocumentFalse } = indeStore;

    return function (...args: any[]) {
        if ( args.length !== fn.length ) throw new SyntaxError("Wrong arguments");

        setPointerOnDocumentFalse();
        fn(args);
    }
}

export function getMonthName(num: number): string {
    try {
        let result: string;

        switch( num ) {
            case 1:
                result = "January"
                break;
            case 2:
                result = "February"
                break;
            case 3:
                result = "March"
                break;
            case 4:
                result = "April"
                break;
            case 5:
                result = "May"
                break;
            case 6:
                result = "June"
                break;
            case 7:
                result = "July"
                break;
            case 8:
                result = "August"
                break;
            case 9:
                result = "September"
                break;
            case 10:
                result = "October"
                break;
            case 11:
                result = "November"
                break;
            case 12:
                result = "December"
                break;
            default:
                throw new TypeError("The number must be in the range from 1 to 12");
        };
        
        return result;
    } catch (error) {
        logError(error as Error);
        return "";
    }
}

export function addClass(event: PointerEvent, className: string) {
    const elem = event.currentTarget as HTMLElement;
    elem.classList.add(className);
}

export function removeClass(event: PointerEvent, className: string) {
    const elem = event.currentTarget as HTMLElement;
    elem.classList.remove(className);
}

export function scrollToTop() {
    if ( typeof navigator !== "undefined" ) {
        if ( /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ) {
            let timeout = setTimeout(function scrolling() {
                scrollBy(0, -20);
                if ( scrollY > 0 ) timeout = setTimeout(scrolling, 10);
                else clearTimeout(timeout);
            }, 10);
        } else {
            window.scroll({
                top: 0,
                behavior: "smooth"
            });
        }
    }
}

export function resetMenu() {
    const menuNavbarStore = useMenuNavbar();
    const { isMenuOpen } = storeToRefs(menuNavbarStore);
    const { closeMenu, setYGrabPercent } = menuNavbarStore;

    if ( isMenuOpen.value ) {
        setYGrabPercent(110);
        closeMenu();
    }
}

export function scrollToElement(selector: string) {
    const mainBottomElement = document.querySelector(selector) as HTMLDivElement;
    if (  /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) ) {
        let multiplier = 1;
        let timeout = setTimeout(function scrolling() {
            scrollBy(0, 5 * multiplier++);
            const { scrollHeight, clientHeight } = document.documentElement;
            const isBottomDocument = Math.floor( scrollHeight - clientHeight - scrollY ) <= 0;
            const top = mainBottomElement.getBoundingClientRect().top;
            if ( top + scrollY <= scrollY || isBottomDocument ) clearTimeout(timeout);
            else timeout = setTimeout(scrolling, 10);
        }, 10);
    } else {
        window.scroll({
            top: mainBottomElement.getBoundingClientRect().top + scrollY,
            behavior: "smooth"
        });
    }
}

export function isNotComputer(): boolean {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

export function createResizeFn() {
    let lastTimeout: ReturnType<typeof setTimeout>;
    let lastDocumentWidth = 0;

    return () => {
        if ( lastTimeout ) clearTimeout(lastTimeout);

        lastTimeout  = setTimeout(() => {
            const documentWidth = document.documentElement.clientWidth;
            if ( lastDocumentWidth !== documentWidth ) {
                setMatchMedia();
                lastDocumentWidth = documentWidth;
            }
        }, 500);
    }
}

export function createOrientationChangeFn() {
    let timeout: ReturnType<typeof setTimeout>;

    return () => {
        if ( timeout ) clearTimeout(timeout);

        timeout = setTimeout(setMatchMedia, 10);
    }
}

export function loadFn() {
    setMatchMedia();
}

export function pointerDownFn() {
    const index = useIndex();
    const { setPointerOnDocumentTrue } = index;

    const downloadImageStore = useDownloadImage();
    const { setImgClickedFalse } = downloadImageStore;

    setPointerOnDocumentTrue();
    setImgClickedFalse();
}

export function pointerMoveFn(event: PointerEvent) {
    const menuNavbarStore = useMenuNavbar();
    const { wasDownOnGrab } = storeToRefs(menuNavbarStore);
    const { setYGrabPercent } = menuNavbarStore;

    if ( !wasDownOnGrab.value ) return;
    let y = event.clientY, windowHeight = document.documentElement.clientHeight;
    let percent = 100 - Math.floor( ( y + 22.5 ) * 100 / windowHeight);
    if ( percent < 0 ) percent = 0;
    if ( percent > 110 ) percent = 110;
    setYGrabPercent(percent);
}