<template>
    <nuxt-img
    @click="scrollToElement(selector)"
    :src="isMobile || isMiddleDevice ? '/global/img_arrow_down.png' : '/global/img_arrow_down_18.png'"
    alt="img_arrow_down_18"
    class="header_button" />
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    import type { PropType } from "vue";

    defineProps({
        selector: {
            type: String as PropType<string>,
            required: true
        }
    });

    const indexStore = useIndex();
    const { isMobile, isMiddleDevice } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .header_button {
        margin: 555px 0 0 0;
        cursor: pointer;

        @media screen and ( max-width: 751px ) {
            margin: 1077px 0 0 0;
        }
    }
</style>