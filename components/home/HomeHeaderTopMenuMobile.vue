<template>
    <button class="header_top__menu_mobile" @click="openMenu()">
        <nuxt-img src="/home/cd_menu_icon_11.png" alt="mobile_icon" />
    </button>
</template>

<script setup lang="ts">    
    const menuNavbarStore = useMenuNavbar();
    const { openMenu } = menuNavbarStore;
</script>

<style lang="scss">
    .header_top__menu_mobile {
        display: none;

        @media screen and ( max-width: 751px ) {
            width: 87px;
            height: 113px;
            opacity: .9;
            background-color: rgba(39, 51, 56, .9);;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
        }
    }
</style>