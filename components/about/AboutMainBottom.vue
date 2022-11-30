<template>
    <div class="main_bottom">
        <nuxt-img
        :src="isMobile ? '/about/rectangle_287.png' : '/about/rectangle_497.png'"
        alt="services_img"
        :style="isMobile ? { 'max-width': '100%' } : {}" />
        <about-main-bottom-content/>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_bottom {
        margin: 155px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        min-width: 100%;
        background-color: #f9f9f9;

        @media screen and ( min-width: 1281px ) {
            justify-content: center;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            flex-direction: column;
        }

        @media screen and ( max-width: 751px ) {
            margin: 293px 0 0 0;
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>