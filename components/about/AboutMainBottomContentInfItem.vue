<template>
    <span class="main_bottom__content___inf____item" :style="additionalStyles">
        <slot>
        </slot>
    </span>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";

    defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });
</script>

<style lang="scss">
    .main_bottom__content___inf____item {
        max-width: 218px;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        line-height: 30px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #505d68;

        @media screen and ( max-width: 751px ) {
            max-width: 90%;
            font-size: 31px;
            line-height: 56px;
            font-weight: 300;
            letter-spacing: 0.05em;
        }

        @media screen and ( max-width: 680px ) {
            text-align: center;
        }
    }
</style>