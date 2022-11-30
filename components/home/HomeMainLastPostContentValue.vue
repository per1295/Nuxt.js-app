<template>
    <div class="main_lastPost__content___value">
        <home-main-last-post-content-value-date/>
        <home-main-last-post-content-value-title/>
        <home-main-last-post-content-value-description/>
        <global-custom-button
        :additional-styles="
        isNarrowMobile ?
        { 'width': '80%', 'height': '92px', 'margin': '97px 0 83px 0' }
        :
        isMobile ?
        { 'width': '242px', 'height': '92px', 'margin': '97px 0 83px 0' }
        :
        { 'width': '127px', 'height': '48px', 'margin': '58px 0 0 0' }"
        >
            Read
        </global-custom-button>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    
    const indexStore = useIndex();
    const { isMobile, isNarrowMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_lastPost__content___value {
        margin: 39.75px 0 0 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 76px 0 0 77px;
        }

        @media screen and ( max-width: 680px ) {
            margin: 76px 0 0 26px;
        }
    }
</style>