<template>
    <div class="main_contacts__blocks___infBlock" :style="additionalStyle">
        <div class="infBlock_conteiner">
            <div class="infBlock_conteiner__whiteLine"></div>
            <span class="infBlock_conteiner__inf">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { CSSProperties, PropType } from "vue";

    defineProps({
        additionalStyle: {
            type: Object as PropType<CSSProperties>,
            required: true
        }
    });
</script>

<style lang="scss">
    .main_contacts__blocks___infBlock {
        width: 300px;
        height: 300px;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            height: 375.5px;
        }

        .infBlock_conteiner {
            margin: 33px 0 0 33px;

            @media screen and ( max-width: 751px ) {
                margin: 60px 0 0 58px;
            }

            @media screen and ( max-width: 561px ) {
                margin: 60px 0 0 0;
            }

            .infBlock_conteiner__whiteLine {
                width: 31px;
                height: 3px;
                background-color: #ffffff;

                @media screen and ( max-width: 751px ) {
                    width: 58px;
                    height: 6px;
                }

                @media screen and ( max-width: 561px ) {
                    margin: 0 0 0 5%;
                }
            }

            .infBlock_conteiner__inf {
                display: block;
                margin: 39.75px 0 0 0;
                font-family: 'Open Sans', sans-serif;
                font-size: 25px;
                line-height: 32px;
                font-weight: 400;
                letter-spacing: -0.02em;
                color: #ffffff;

                @media screen and ( max-width: 751px ) {
                    margin: 75.55px 0 0 0;
                    font-size: 45.8px;
                    line-height: 58px;
                }

                @media screen and ( max-width: 561px ) {
                    font-size: 25px;
                    text-align: center;
                }
            }
        }
    }
</style>