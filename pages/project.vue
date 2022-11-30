<template>
    <div>
        <nuxt-layout>
            <global-header-with-arrow
            background-image="/project/cd_intro_project_background_2_project.png"
            mobile-background-image="/project/cd_intro_background_4_project.png"
            :selector="headerSelector" />
            <project-main />
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    
    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const headerSelector = computed(() => isMobile.value ? ".main_conteiner__leftColum" : ".main_buttons");
    const styleForFooter = computed(() => ({
        margin: `${isMobile ? 32 : 73}px 0 0 0`
    }));
</script>