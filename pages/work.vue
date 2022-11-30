<template>
    <div>
        <nuxt-layout>
            <global-header background-image="/work/cd_intro_work_page_background_2.png"
            mobile-background-image="/work/cd_work_intro_background_4.png" />
            <work-main />
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>