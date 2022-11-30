<template>
    <div ref="rootElRef" @pointerdown.stop="setImgClickedTrue" class="download">
        <global-download-text/>
        <global-download-buttons/>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const downloadImageStore = useDownloadImage();
    const { wasImgClicked } = storeToRefs(downloadImageStore);
    const { setImgClickedTrue } = downloadImageStore;

    const indexStore = useIndex();
    const { setPointerOnDocumentTrue, setPointerOnDocumentFalse } = indexStore;

    const rootElRef = ref();

    watch(wasImgClicked, (nowValue) => {
        const downloadElement = rootElRef.value as HTMLDivElement;
        if ( nowValue ) {
            downloadElement.classList.add("download_active");
            setPointerOnDocumentFalse();
        } else {
            downloadElement.classList.remove("download_active");
            setPointerOnDocumentTrue();
        };
    });
</script>

<style lang="scss">
    .download {
        position: fixed;
        bottom: -110%;
        right: 0;
        left: 0;
        background-color: rgba(212, 175, 55, .7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        z-index: 70;
        transition: bottom .4s ease-out;
    }

    .download_active {
        transition: bottom .4s ease-in;
        bottom: 0;
    }
</style>