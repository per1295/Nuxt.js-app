<template>
    <span class="blog_conteiner__title">
        {{ title }}
    </span>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";

    defineProps({
        title: {
            type: String as PropType<string>,
            required: true
        }
    });
</script>

<style lang="scss">
    .blog_conteiner__title {
        display: block;
        margin: 33px 0 0 3px;
        font-family: 'Open Sans', sans-serif;
        font-size: 30px;
        font-weight: 300;
        letter-spacing: 0.035em;
        color: #000000;

        @media screen and ( max-width: 751px ) {
            margin: 47px 0 0 0;
            font-size: 56px;
            letter-spacing: 0.03em;
        }
    }
</style>