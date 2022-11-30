<template>
    <header :style="nowImageObj">
        <global-header-with-arrow-top/>
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
        width: 100%;
        max-width: 100%;
        height: 399px;
        min-height: 399px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        background: #d4af37;
        background-repeat: no-repeat;

        @media screen and ( min-width: 1281px ) {
            background-size: cover;
        }

        @media screen and ( max-width: 751px ) {
            background: #d4af37;
            height: 1337px;
            min-height: 1337px;
        }
    }
</style>