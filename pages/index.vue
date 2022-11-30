<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
        </Head>
        <div></div>
    </div>
</template>

<script setup lang="ts">
    const title = ref("Loading...");
    const timeOut = ref<NodeJS.Timeout | null>(null);

    onMounted(() => {
        scrollToTop();
        resetMenu();

        navigateTo("/home");

        timeOut.value = setTimeout(function change() {
            const periods = title.value.match(/\./g)?.toString() as string;
            if ( periods.length >= 3 ) title.value = "Loading.";
            else title.value += ".";
            timeOut.value = setTimeout(change, 250);
        }, 250);
    });

    onBeforeUnmount(() => {
        if ( timeOut.value ) clearTimeout(timeOut.value);
    });
</script>