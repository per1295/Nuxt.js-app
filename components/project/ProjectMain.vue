<template>
   <main>
       <project-main-conteiner/>
       <component :is="isMobile ? null : ProjectMainButtons"/>
   </main> 
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const ProjectMainButtons = resolveComponent("ProjectMainButtons");

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style scoped lang="scss">
    main {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>