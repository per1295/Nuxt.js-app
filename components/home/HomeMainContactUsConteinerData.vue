<template>
    <div class="main_contactUs__conteiner___data">
        <home-main-contact-us-conteiner-data-item
        v-for="( item, index ) of TITLES"
        :title="item"
        :data-item1="data[index][0]"
        :data-item2="data[index][1]"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { storeToRefs } from "pinia";

    const TITLES = [ "Location", "Phone", "Fax", "Email" ];

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const data = computed(() => {
        const emailsArray = isMobile.value ?
        [ "e@elegant.com", "c@elegant.com" ]
        :
        [ "elegant@elegant.com", "commercial@elegant.com" ];
        const addressArray = isMobile.value ?
        [ "198 West 21th Street, New York,", "NY 10010" ]
        :
        [ "198 West 21th Street, New", "York, NY 10010" ];
        const numbersArray = isMobile.value ?
        [ "+88 (0) 101 0000 000", "+88 (0) 101 0000 000" ]
        :
        [ "+88 (0) 101 0000000", "+88 (0) 101 0000000" ];

        return [
            addressArray,
            numbersArray,
            [ "+88 (0) 202 0000 000", "+88 (0) 202 0000 000" ],
            emailsArray
        ];
    });
</script>

<style lang="scss">
    .main_contactUs__conteiner___data {
        margin: 52px 60px 43px 68px;
        display: grid;
        grid-template-columns: repeat(1, 240px 231px);
        gap: 94.5px 167px;

        @media screen and ( max-width: 751px ) {
            margin: 88px 55px 70px 46px;
            grid-template-columns: repeat(1, 237px 228px);
            gap: 118px 114px;
        }

        @media screen and ( max-width: 680px ) {
            grid-template-columns: repeat(1, 100%);
            margin: 88px 0px 70px 0px;
        }
    }
</style>