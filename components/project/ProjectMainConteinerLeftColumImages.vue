<template>
    <div class="main_conteiner__leftColum___images">
        <nuxt-img
        v-for="( src, index ) of isMobile ? MOBILE_IMAGES_ARRAY : IMAGES_ARRAY"
        :src="src"
        alt="leftColum_image"
        :key="index"
        :style="additionalStyleImage"
        />
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    
    const IMAGES_ARRAY = [
        "/project/img1_540.png",
        "/project/img2_545.png",
        "/project/img3_546.png",
        "/project/img4_547.png"
    ];
    const MOBILE_IMAGES_ARRAY = [
        "/project/img1_349_mobile.png",
        "/project/img2_350_mobile.png",
        "/project/img3_351_mobile.png",
        "/project/img4_352_mobile.png",
    ];

    const indexStore = useIndex();
    const { isMobile, isNarrowMobile, isMiddleDevice } = storeToRefs(indexStore);

    const additionalStyleImage = computed(() => ({
        maxWidth: isNarrowMobile || isMiddleDevice ? "100%": "none",
        width: isNarrowMobile || isMiddleDevice ? "100%" : "auto"
    }));
</script>

<style lang="scss">
    .main_conteiner__leftColum___images {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 19px;
        margin: 101px 0 0 0;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            grid-template-columns: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 154px 0 0 0;
            row-gap: 33px;
        }
    }
</style>