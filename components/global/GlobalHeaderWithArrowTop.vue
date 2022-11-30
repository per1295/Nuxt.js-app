<template>
    <div class="header_top">
        <global-header-with-arrow-top-logo/>
        <keep-alive>
            <component :is="isMobile ? HomeHeaderTopMenuMobile : HomeHeaderTopMenu"/>
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const HomeHeaderTopMenu = resolveComponent("HomeHeaderTopMenu");
    const HomeHeaderTopMenuMobile = resolveComponent("HomeHeaderTopMenuMobile")

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .header_top {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0 0 0;
        max-width: 1184px;
        min-width: 1184px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            max-width: 100%;
            min-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            max-width: 100%;
            min-width: 100%;
            margin: 0;
            background-color: rgb(14%, 18%, 21%, .7);;
        }
    }
</style>