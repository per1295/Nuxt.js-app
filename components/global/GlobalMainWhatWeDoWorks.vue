<template>
    <div class="main_whatWeDo__works" :style="additionalStyles">
        <global-main-what-we-do-works-item
        v-for="( srcItem, index ) of isMobile ? SRC_ITEMS_MOBILE : SRC_ITEMS"
        :src="srcItem"
        :index="index"
        :key="index"
        />
    </div>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";

    defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const SRC_ITEMS = [
        "/global/row_image__1.png",
        "/global/row_image__2.png",
        "/global/row_image__3.png",
        "/global/row_image__4.png",
        "/global/row_image__5.png",
        "/global/row_image__6.png",
        "/global/row_image__7.png",
        "/global/row_image__8.png",
    ];

    const SRC_ITEMS_MOBILE = [
        "/global/colum_image__1.png",
        "/global/colum_image__2.png",
        "/global/colum_image__3.png",
        "/global/colum_image__4.png",
        "/global/colum_image__5.png",
        "/global/colum_image__6.png",
        "/global/colum_image__7.png",
        "/global/colum_image__8.png"
    ];
</script>

<style lang="scss">
    .main_whatWeDo__works {
        margin: 81px 0 0 2px;
        display: grid;
        grid-template-columns: repeat(auto-fit, 317px);
        gap: 3px;
        width: 1278px;
        max-width: 1278px;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 81px 0 0 0px;
            width: 100%;
            max-width: 100%;
            min-width: 100%;
            justify-content: center;
        }

        @media screen and ( max-width: 751px ) {
            margin: 148px 0 0 0;
            grid-template-columns: repeat(1, 100%);
            gap: 5px 0;
            width: 100%;
            max-width: 100%;
        }
    }
</style>