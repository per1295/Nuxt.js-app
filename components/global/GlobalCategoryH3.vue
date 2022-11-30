<template>
    <h3 class="categoryH3" :style="additionalStyles">
        {{ title }}
    </h3>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";

    defineProps({
        title: {
            type: String as PropType<string>,
            required: true
        },
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });
</script>

<style lang="scss">
    .categoryH3 {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #d4af37;
        text-align: center;

        @media screen and ( max-width: 751px ) {
            font-size: 28px;
            font-weight: 400;
            letter-spacing: normal;
        }
    }
</style>