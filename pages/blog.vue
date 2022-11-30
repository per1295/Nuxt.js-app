<template>
    <div>
        <nuxt-layout>
            <component
            :is="isMobile ? GlobalHeaderWithArrowTop : GlobalHeader"
            background-image="/blog/cd_intro_blog_background_2_blog.png"
            :mobile-background-image="''" />
            <blog-main />
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const GlobalHeader = resolveComponent("GlobalHeader");
    const GlobalHeaderWithArrowTop = resolveComponent("GlobalHeaderWithArrowTop");

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>