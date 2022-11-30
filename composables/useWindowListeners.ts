export default function (events: string[], listeners: any[]) {
    onBeforeMount(() => {
        events.forEach((item, index) => {
            window.addEventListener(item, listeners[index]);
        });
    });

    onMounted(() => {
        events.forEach((item, index) => {
            if ( /^load$/i.test(item) ) setTimeout(listeners[index], 250);
        });
    })

    onBeforeUnmount(() => {
        events.forEach((item, index) => {
            window.removeEventListener(item, listeners[index]);
        });
    });
}