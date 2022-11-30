<template>
    <div class="main_contacts__blocks">
        <contacts-main-contacts-blocks-inf-block
        :additional-style="{ 'background': '#d3b000' }">
            Rua Serpa Pinto,
            <br>
            Lisbon, Portugal
        </contacts-main-contacts-blocks-inf-block>
        <nuxt-img
        :src="isMobile ? '/contacts/rectangle_397_mobile.png' : '/contacts/rectangle_602.png'"
        alt="blockImage"
        :style="{
            'margin': `0 0 0 ${isMobile ? 0 : 6}px`,
            'max-width': isMobile ? '100%' : 'none',
        }"
        />
        <contacts-main-contacts-blocks-text-block/>
        <contacts-main-contacts-blocks-inf-block
        :additional-style="{ 'margin': `0 0 0 ${isMobile ? 0 : 4}px`, 'background': '#212121' }">
            +88 (0) 101 0000 000
            <br> 
            +88 (0) 101 0000 000
        </contacts-main-contacts-blocks-inf-block>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex()
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_contacts__blocks {
        margin: 87px 0 0 0;
        width: 63%;
        max-width: 768px;
        display: flex;
        flex-wrap: wrap;

        @media screen and ( min-width: 751px ) and ( max-width: 1220px ) {
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: center;
            row-gap: 30px;
        }

        @media screen and ( max-width: 751px ) {
            margin: 159px 0 0 0;
            width: 89.3%;
            max-width: 89.3%;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-start;
        }
    }
</style>