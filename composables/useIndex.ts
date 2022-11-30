import { defineStore } from "pinia";

const useIndex = defineStore("index", {
    state: () => ({
        isMobile: false,
        isPointerOnDocument: false,
        isNarrowMobile: false,
        isMiddleDevice: false,
        masPaths: [] as string[]
    }),
    actions: {
        setMobileTrue() {
            this.isMobile = true;
        },
        setMobileFalse() {
            this.isMobile = false;
        },
        setNarrowMobileTrue() {
            this.isNarrowMobile = true;
        },
        setNarrowMobileFalse() {
            this.isNarrowMobile = false;
        },
        setMiddleDeviceTrue() {
            this.isMiddleDevice = true;
        },
        setIsMiddleDeviceFalse() {
            this.isMiddleDevice = false;
        },
        setPointerOnDocumentTrue() {
            this.isPointerOnDocument = true;
        },
        setPointerOnDocumentFalse() {
            this.isPointerOnDocument = false;
        },
        pushPathToMasPaths(path: string) {
            this.masPaths.push(path);
        }
    }
});

export default useIndex;