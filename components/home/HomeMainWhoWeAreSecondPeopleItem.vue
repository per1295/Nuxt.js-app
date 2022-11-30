<template>
    <div class="main_whoWeAreSecond__people___item" :style="addtionalStyles">
        <home-main-who-we-are-second-people-item-img
        :src="src"
        :additional-styles="isNarrowMobile ? { 'width': '100%' } : { }"
        />
        <home-main-who-we-are-second-people-item-conteiner>
            <global-category-h3 :title="position" :additional-styles="additionalStylesH3"/>
            <home-main-who-we-are-second-people-item-conteiner-fullname :full-name="fullname" />
            <home-main-who-we-are-second-people-item-conteiner-description/>
        </home-main-who-we-are-second-people-item-conteiner>
    </div>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";

    defineProps({
        src: {
            type: String as PropType<string>,
            required: true
        },
        position: {
            type: String as PropType<string>,
            required: true
        },
        fullname: {
            type: String as PropType<string>,
            required: true
        },
        addtionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });

    const indexStore = useIndex();
    const { isMobile, isNarrowMobile } = storeToRefs(indexStore);

    const additionalStylesH3 = computed(() => {
        const additionalStylesH3: CSSProperties = {
            fontSize: "29px",
            fontWeight: 600
        };
        return isMobile.value ? additionalStylesH3 : {};
    });
</script>

<style lang="scss">
    .main_whoWeAreSecond__people___item {
        width: 245px;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            max-width: 680px;
            width: 100%;
        }

        @media screen and ( max-width: 680px ) {
            width: auto;
        }
    }
</style>