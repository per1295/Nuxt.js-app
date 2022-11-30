<template>
    <div class="download_buttons">
        <global-custom-button
        :additional-styles="{ 'width': '40%', 'height': '50px' }"
        :additional-listener="() => { download() }">
            Yes
        </global-custom-button>
        <global-custom-button
        :additional-styles="{ 'width': '40%', 'height': '50px' }"
        :additional-listener="setImgClickedFalse">
            No
        </global-custom-button>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";;

    const downloadImageStore = useDownloadImage();
    const { nowImgSrc } = storeToRefs(downloadImageStore);
    const { setImgClickedFalse } = downloadImageStore;

    async function download() {
        const [ filename, ext ] = nowImgSrc.value.split(".");
        open(`/api/global/download?filename=${filename}&ext=${ext}`, "image");
    }
</script>

<style lang="scss">
    .download_buttons {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 50px 0 50px 0;
    }
</style>