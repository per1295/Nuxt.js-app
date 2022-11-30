<template>
    <div class="main_contacts">
        <global-category-h3 :title="'This is it!'"/>
        <global-category-p
        :title="'Contact Us'"
        :additional-styles="{ 'margin': '13px 0 0 0' }"
        />
        <contacts-main-contacts-blocks/>
        <global-custom-button
        :additional-styles="{ 'margin': `${isMobile ? 150 : 77}px 0 0 0` }"
        >
            Shote us an Email
        </global-custom-button>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style scoped lang="scss">
    .main_contacts {
        margin: 128px 0 0 0;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>