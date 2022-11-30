<template>
    <h4 class="main_whoWeAreSecond__people___item____conteiner_____fullname">
        {{ fullName }}
    </h4>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";

    defineProps({
        fullName: {
            type: String as PropType<string>,
            required: true
        }
    });
</script>

<style lang="scss">
    .main_whoWeAreSecond__people___item____conteiner_____fullname {
        opacity: 0.7;
        font-family: 'Open Sans', sans-serif;
        font-size: 21px;
        font-weight: 400;
        letter-spacing: 0.05em;
        color: #021725;
        margin: 14.75px 0 0 0;

        @media screen and ( max-width: 751px ) {
            font-size: 39.8px;
            margin: 29.05px 0 0 0;
        }
    }
</style>