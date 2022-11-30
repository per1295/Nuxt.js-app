<template>
    <div class="main_contactUs__conteiner___data____item">
        <home-main-contact-us-conteiner-data-item-h4>
            {{ title }}
        </home-main-contact-us-conteiner-data-item-h4>
        <home-main-contact-us-conteiner-data-item-p>
            <span class="main_contactUs__conteiner___data____item_____p______span">
                {{ dataItem1 }}
            </span>
            <span class="main_contactUs__conteiner___data____item_____p______span">
                {{ dataItem2 }}
            </span>
        </home-main-contact-us-conteiner-data-item-p>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";

    defineProps({
        title: {
            type: String as PropType<string>,
            required: true
        },
        dataItem1: {
            type: String as PropType<string>,
            required: true
        },
        dataItem2: {
            type: String as PropType<string>,
            required: true
        }
    });
</script>

<style lang="scss">
    .main_contactUs__conteiner___data____item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .main_contactUs__conteiner___data____item_____p______span {
        min-width: 250px;
    }
</style>