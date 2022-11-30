<template>
    <h2 class="header_main">
        <span
        v-html="headerMainHTML"></span>
    </h2>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isNarrowMobile } = storeToRefs(indexStore);

    const headerMainHTML = computed(() => (
        isNarrowMobile.value
        ?
        "Say <span>Haloa</span> to your Portfolio"
        :
        "Say <span>Haloa</span> <span class='header_main__portfolio_mobile'>to your Portfolio</span>"
    ));
</script>

<style lang="scss">
    .header_main {
        font-family: 'Open Sans', sans-serif;
        font-size: 80px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #ffffff;
        margin: 225px 0 0 0;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            text-align: center;
        }

        @media screen and ( max-width: 751px ) {
            margin: 359.25px 0 0 0;
            max-width: 650px;
            text-align: center;
            font-family: 'Open Sans';
            font-size: 95px;
            line-height: 60px;
            font-weight: 300;
            letter-spacing: 0.03em;
        }

        @media screen and ( max-width: 680px ) {
            max-width: 90%;
            margin: 169.25px 0 0 0;
            font-size: 3.2em;
        }

        span {
            font-style: italic;

            @media screen and ( max-width: 680px ) {
                line-height: 200px;
            }
        }

        .header_main__portfolio_mobile {
            @media screen and ( max-width: 751px ) {
                line-height: 140px;
            }
        }
    }
</style>