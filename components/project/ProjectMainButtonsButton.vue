<template>
    <button class="main_buttons__button" @mouseenter="addActive($event)" @mouseleave="removeActive($event)">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    function addActive(event: MouseEvent) {
        const currentButton = event.currentTarget as HTMLButtonElement;
        currentButton.classList.add("main_buttons__button_active");
    }

    function removeActive(event: MouseEvent) {
        const currentButton = event.currentTarget as HTMLButtonElement;
        currentButton.classList.remove("main_buttons__button_active");
    }
</script>

<style lang="scss">
    .main_buttons__button {
        flex-basis: 249px;
        height: 58px;
        border: 1px solid #a1a1a1;
        background-color: transparent;
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        line-height: 32px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #c0c0c0;
        cursor: pointer;
        transition: color .25s ease-out, background-color .25s ease-out;
        padding: 0;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            flex-basis: 30%;
            max-width: 249px;
        }
    }

    .main_buttons__button_active {
        background-color: #505d68;
        color: #ffffff;
        transition: color .25s ease-in, background-color .25s ease-in;
    }
</style>