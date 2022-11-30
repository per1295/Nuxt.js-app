<template>
    <div class="main_conteiner__inf___block">
        <h3 class="inf_block__title">{{ title }}</h3>
        <div class="inf_block__line"></div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";

    defineProps({
        title: {
            type: String as PropType<string>,
            required: true
        }
    });
</script>

<style lang="scss">
    .main_conteiner__inf___block {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            max-width: 555px;
            width: 82.5%
        }

        .inf_block__title {
            margin: 0;
            opacity: 0.7;
            font-family: 'Open Sans', sans-serif;
            font-size: 23px;
            line-height: 32px;
            font-weight: 300;
            letter-spacing: 0.02em;
            color: #021725;

            @media screen and ( max-width: 751px ) {
                font-size: 43px;
                line-height: 59px;
            }
        }

        .inf_block__line {
            margin: 13.7px 0 0 0;
            width: 100%;
            height: 3px;
            background-color: #d3b000;

            @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                width: 88%;
            }
        }
    }
</style>