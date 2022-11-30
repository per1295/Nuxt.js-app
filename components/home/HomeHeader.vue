<template>
    <header>
        <global-header-with-arrow-top/>
        <home-header-main/>
        <keep-alive>
            <component :is="isMobile ? HomeHeaderArrowButtonMobile : null" />
        </keep-alive>
    </header>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const HomeHeaderArrowButtonMobile = resolveComponent("HomeHeaderArrowButtonMobile");

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss" scoped>
    header {
        background: #1c60a7 url("/home/cd_intro_background_2.png");
        min-width: 100%;
        max-width: 100%;
        min-height: 699px;
        max-height: 699px;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            background: #1c60a7 url("/home/header_mobile__background.png");
            min-height: 1337px;
            height: 1337px;
            max-height: 1337px;
        }

        @media screen and ( max-width: 680px ) {
            background-position: center;
        }
    }
</style>