<template>
    <div class="main_bottom__content___inf">
        <about-main-bottom-content-inf-item>
            We’ll work with you to define a strong visual identity. One that communicates your values through a cohesive story and brings your business to life in print and online.
        </about-main-bottom-content-inf-item>
        <about-main-bottom-content-inf-item :additional-styles="{ 'margin': isMobile ? '159.45px 0 0 0' : '0 0 0 99px' }">
            <template v-for="( item ) of THE_MAIN_BOTTOM_CONTENT_INF_ITEMS">
                <about-main-bottom-content-inf-item-part>
                    {{ item }}
                </about-main-bottom-content-inf-item-part>
                <br> 
            </template>
        </about-main-bottom-content-inf-item>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const THE_MAIN_BOTTOM_CONTENT_INF_ITEMS = [
        "-  Branding",
        "-  Visual Identity",
        "-  Web & Digital Design", 
        "-  Annual Reports", 
        "-  Books & Brochures", 
        "-  Programs & Editorial",
        "-  Creative Consultancy"
    ];
</script>

<style lang="scss">
    .main_bottom__content___inf {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        margin: 86.5px 0 10px 0;

        @media screen and ( max-width: 751px ) {
            flex-direction: column;
            align-items: flex-start;
            margin: 167.25px 0 81px 0;
        }

        @media screen and ( max-width: 680px ) {
            align-items: center;
        }
    }
</style>