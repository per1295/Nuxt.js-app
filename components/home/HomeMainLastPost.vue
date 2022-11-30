<template>
    <div class="main_lastPost">
        <global-category-h3 title="Last Post"/>
        <global-category-p title="We Like to Write"
        :additional-styles="isMobile ? { 'margin': '14.5px 0 0 0' } : {}"
        />
        <home-main-last-post-content/>
        <global-custom-button
        :additional-styles="isMobile ?
        { 'margin': '77px 0 0 0' }
        :
        { 'margin': '84px 0 0 0' }"
        
        :additional-listener="toBlog">
            More From Our Blog
        </global-custom-button>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    
    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const toBlog = () => navigateTo({path: "/blog"});
</script>

<style lang="scss">
    .main_lastPost {
        margin: 165px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 304px 0 0 0;
        }
    }
</style>