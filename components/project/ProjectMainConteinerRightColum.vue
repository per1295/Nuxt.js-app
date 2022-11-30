<template>
    <div class="main_conteiner__rightColum">
        <nuxt-img
        v-for="( src, index ) of isMobile ? MOBILE_IMAGES_ARRAY : IMAGES_ARRAY"
        :src="src"
        alt="rightColum_image"
        :key="index"
        :style="additionalStyleImage" />
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const IMAGES_ARRAY = [
        "/project/rectangle_550.png",
        "/project/rectangle_553.png",
        "/project/rectangle_558.png",
        "/project/rectangle_562.png",
        "/project/rectangle_566.png",
        "/project/rectangle_570.png",
    ];
    const MOBILE_IMAGES_ARRAY = [
        "/project/rectangle_322_mobile.png",
        "/project/rectangle_326_mobile.png",
        "/project/rectangle_330_mobile.png",
        "/project/rectangle_334_mobile.png",
        "/project/rectangle_338_mobile.png",
        "/project/rectangle_342_mobile.png"
    ];

    const indexStore = useIndex();
    const { isMobile, isMiddleDevice, isNarrowMobile } = storeToRefs(indexStore);

    const additionalStyleImage = computed(() => ({
        maxWidth: isNarrowMobile || isMiddleDevice ? "100%": "none",
        width: isNarrowMobile || isMiddleDevice ? "100%" : "auto"
    }));
</script>

<style lang="scss">
    .main_conteiner__rightColum {
        margin: 64px 69px 0 0;
        width: 297px;
        max-width: 297px;
        min-width: 297px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 3px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 64px 20px 64px 0;
            width: 40%;
            max-width: 40%;
            min-width: 40%;
            grid-template-columns: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 33px 0 29px 27px;
            width: auto;
            max-width: none;
            min-width: auto;
            row-gap: 5px;
        }

        @media screen and ( min-width: 250px ) and ( max-width: 731px ) {
            margin: 33px 0 29px 0;
            width: calc(100% - 27px);
            max-width: calc(100% - 27px);
            min-width: calc(100% - 27px);
        }
    }
</style>