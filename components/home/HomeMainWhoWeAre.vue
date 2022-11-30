<template>
    <div class="main_whoWeAre">
        <global-category-h3 title="Who we Are"/>
        <global-category-p title="Tell The World About Yourself"/>
        <global-category-description
        :additional-styles="isMobile ? { 'margin': '75.75px 0 0 0' } : { 'margin': '48.5px 0 0 0' }"
        />
        <global-custom-button
        :additional-styles="isMobile ? { 'margin': '68px 0 0 0' } : { 'margin': '46px 0 0 0' }"
        :additional-listener="toAbout"
        />
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
    
    function toAbout() {
        navigateTo({ path: "/about" });
        scrollToTop();
    }
</script>

<style lang="scss">
    .main_whoWeAre {
        margin: 77.75px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 146px 0 0 0;
            max-width: 100%;
        }
    }
</style>