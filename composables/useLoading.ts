export default function(endCondition?: boolean) {
    const countOfPeriod = ref(3);
    const timeout = ref<NodeJS.Timeout | undefined>(undefined);

    onMounted(() => {
        if ( typeof endCondition === "undefined" ) return;

        timeout.value = setTimeout(function setLoading() {

            if ( countOfPeriod.value >= 3 ) countOfPeriod.value = 1;
            else countOfPeriod.value =+ 1;

            if ( endCondition ) {
                clearTimeout(timeout.value);
            } else {
                timeout.value = setTimeout(setLoading, 100);
            }
        }, 100);
    });

    return `Loading${Array.from({ length: countOfPeriod.value }).map(() => ".")}`;
}