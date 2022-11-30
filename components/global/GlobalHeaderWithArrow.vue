<template>
    <header :style="nowImageObj">
        <global-header-with-arrow-top/>
        <global-header-with-arrow-button :selector="selector" />
    </header>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";
    import { storeToRefs } from "pinia";

    const props = defineProps({
        backgroundImage: {
            type: String as PropType<string>,
            required: true
        },
        mobileBackgroundImage: {
            type: String as PropType<string>,
            required: true
        },
        selector: {
            type: String as PropType<string>,
            required: true
        }
    });

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const nowImageObj = computed(() => {
        let nowImage: string;
        if ( isMobile.value ) nowImage = props.mobileBackgroundImage;
        else nowImage = props.backgroundImage;

        return {
            backgroundImage: `url(${nowImage})`
        }
    });
</script>

<style lang="scss" scoped>
    header {
        background: #d4af37;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        height: 699px;
        min-height: 699px;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background-size: cover;

        @media screen and ( max-width: 751px ) {
            height: 1337px;
            min-height: 1337px;
            background-position: center;
        }

        @media screen and ( max-width: 680px ) {
            background-position: unset;
        }
    }
</style>