<template>
    <div class="main_whoWeAreSecond__people">
        <home-main-who-we-are-second-people-item
        v-for="( item, index ) of isMobile ? SRC_ITEMS_MOBILE : SRC_ITEMS"
        :src="item"
        :position="POSITION_ITEMS[index]"
        :fullname="FULLNAME_ITEMS[index]"
        :addtional-styles="index === 0 ? {} : isMobile ? { 'margin': '59.5px 0 0 0' } : { 'margin': '0 0 0 5px' }"
        />
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const SRC_ITEMS = [ "/home/man_1.png", "/home/man_2.png", "/home/man_3.png" ];
    const SRC_ITEMS_MOBILE = [ "/home/img_111.png", "/home/img_131.png", "/home/img_141.png" ];
    const POSITION_ITEMS = [ "ceo", "Designer", "Developer" ];
    const FULLNAME_ITEMS = [ "Tobias Schneider", "Jack Knife", "Ricki Hall" ];

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_whoWeAreSecond__people {
        margin: 50px 0 0 0;
        display: flex;
        align-items: center;

        @media screen and ( max-width: 751px ) {
            margin: 135px 0 0 0;
            flex-direction: column;
            justify-content: flex-start;
        }
    }
</style>