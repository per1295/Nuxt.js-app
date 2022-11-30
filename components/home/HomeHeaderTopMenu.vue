<template>
    <div class="header_top__menu" @click="openMenu(), setYGrabPercent(0)">
        Menu
        <button class="header_top__menu___button">
            <nuxt-img src="/home/cd_menu_icon_13.png" alt="button" />
        </button>
    </div>
</template>

<script setup lang="ts">
    const menuNavbarStore = useMenuNavbar();
    const { openMenu, setYGrabPercent } = menuNavbarStore;
</script>

<style lang="scss">
    .header_top__menu {
        display: inline-flex;
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #ffffff;
        cursor: pointer;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            margin: 0 20px 0 0;
        }

        @media screen and ( max-width: 751px ) {
            display: none;
        }
    }

    .header_top__menu___button {
        border: none;
        outline: none;
        display: flex;
        background-color: transparent;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 4px;
        cursor: pointer;
    }
</style>