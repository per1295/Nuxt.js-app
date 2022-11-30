<template>
    <p class="categoryP" :style="additionalStyles">
        {{ title }}
    </p>
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
    .categoryP {
        margin: 10px 0 0 0;
        opacity: 0.7;
        font-family: 'Open Sans', sans-serif;
        font-size: 44px;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: #021725;

        @media screen and ( max-width: 751px ) {
            margin: 15.5px 0 0 0;
            font-size: 90px;
            line-height: 92px;
            font-weight: 600;
            max-width: 88%;
            text-align: center;
            letter-spacing: normal;
        }

        @media screen and ( max-width: 680px ) {
            font-size: 50px;
        }
    }
</style>