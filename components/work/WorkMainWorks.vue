<template>
    <div class="main_works">
        <global-category-h3 title="Our Amazing Work"/>
        <global-category-p title="What We Do"
        :additional-styles="
        isMobile
        ?
        { 'margin': '16.5px 0 0 0', 'opacity': '.7' }
        :
        { 'margin': '12px 0 0 0', 'opacity': '1' }
        "/>
        <global-category-description
        :additional-styles="
        isMobile ?
        { 'margin': '74.75px 0 0 0' }
        :
        { 'margin': '49.5px 0 0 0' }">
            Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
        </global-category-description>
        <global-main-what-we-do-works
        :additional-styles="
        isMobile ?
        { 'margin': '225px 0 0 0' }
        :
        { 'margin': '132px 0 0 0' }
        "/>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_works {
        margin: 124.75px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        min-width: 100%;
    }
</style>