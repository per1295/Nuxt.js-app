<template>
    <nuxt-img
    @click="redirectToHome"
    class="header_top__logo"
    :src="isMobile && !isNarrowMobile ? '/global/cd_logo_9.png' :
    isMobile && isNarrowMobile ? '/global/mobile_menu__image.png' : '/global/cd_logo_5.png'"
    alt="logo" />
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    
    const indexStore = useIndex();
    const { isMobile, isNarrowMobile } = storeToRefs(indexStore);

    const redirectToHome = () => navigateTo({ path: "/home" });
</script>

<style lang="scss">
    .header_top__logo {
        cursor: pointer;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 0 0 0 20px;
        }

        @media screen and ( max-width: 751px ) {
            margin: 14px 0 18px 28px;
        }
    }
</style>