<template>
    <div>
        <nuxt-layout>
            <component
            :is="isMobile ? GlobalHeaderWithArrowTop : GlobalHeader"
            background-image="/contacts/cd_intro_work_page_background_2_contacts.png"
            :mobile-background-image="''" />
            <contacts-main />
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const GlobalHeader = resolveComponent("GlobalHeader");
    const GlobalHeaderWithArrowTop = resolveComponent("GlobalHeaderWithArrowTop");

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    onMounted(() => document.title = "Contacts");
</script>