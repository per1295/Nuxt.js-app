<template>
    <div class="main_contactUs__conteiner">
        <nuxt-img 
        :src="isMobile ? '/home/map_image__mobile.png' : '/home/map_img.png'"
        alt="map_image"
        :style="additionalStyle" />
        <home-main-contact-us-conteiner-data/>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile, isMiddleDevice, isNarrowMobile } = storeToRefs(indexStore);

    const additionalStyle = computed(() => (
        isMiddleDevice.value ?
        { 'max-width': '100%' }
        :
        isNarrowMobile.value
        ?
        { 'width': '100%' }
        :
        {}
    ));
</script>

<style lang="scss">
    .main_contactUs__conteiner {
        margin: 55px 0 0 0;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 101px 0 0 0;
            width: 100%;
            max-width: 680px;
        }
    }
</style>