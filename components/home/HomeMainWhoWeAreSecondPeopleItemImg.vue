<template>
    <nuxt-img
    :src="src"
    alt="item_image"
    class="main_whoWeAreSecond__people___item____img"
    :style="additionalStyles"
    @click="setImgClickedTrue(), setNowImgSrc(src)" />
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";

    const downloadImageStore = useDownloadImage();
    const { setImgClickedTrue, setNowImgSrc } = downloadImageStore;

    defineProps({
        src: {
            type: String as PropType<string>,
            required: true
        },
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });
</script>

<style lang="scss">
    .main_whoWeAreSecond__people___item____img {
        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
        }
    }
</style>