<template>
    <div class="main_buttons">
        <project-main-buttons-button v-for="( title ) of ARRAY_BUTTONS">
            {{ title }}
        </project-main-buttons-button>
    </div>
</template>

<script setup lang="ts">
    const ARRAY_BUTTONS = [ "Facebook", "Twitter", "Google+" ];
</script>

<style lang="scss">
    .main_buttons {
        margin: 104px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        max-width: 80%;
        min-width: 80%;
        align-self: center;

        @media screen and ( max-width: 751px ) {
            display: none;
        }
    }
</style>