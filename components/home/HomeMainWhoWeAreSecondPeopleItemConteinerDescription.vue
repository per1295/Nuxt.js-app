<template>
    <p class="main_whoWeAreSecond__people___item____conteiner_____description">
        {{
            isMobile ?
            "Typi non habent claritatem insitam; est&nbsp;usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt."
            :
            "Lorem ipsum dolor sit amet, conse tetuer adi piscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
        }}
    </p>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_whoWeAreSecond__people___item____conteiner_____description {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #021725;
        margin: 32.75px 0 44.75px 0;
        width: 218px;
        max-width: 218px;

        @media screen and ( max-width: 751px ) {
            font-size: 29px;
            margin: 59.75px 0 82.75px 0;
            max-width: 100%;
            width: 100%;
            letter-spacing: normal;
        }

        @media screen and ( max-width: 680px ) {
            font-size: 23px;
        }
    }
</style>