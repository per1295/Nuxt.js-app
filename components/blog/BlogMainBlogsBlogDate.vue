<template>
    <span class="blog_conteiner__date">
        {{ formattedDate }}
    </span>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";

    const props = defineProps({
        date: {
            type: String as PropType<string>,
            required: true
        }
    });

    const formattedDate = computed(() => {
        const date = props.date.split(".");
        const month = date[1];
        const formattedMonth = getMonthName(+month);
        return `${date[0]} ${formattedMonth} ${date[2]}`;
    });
</script>

<style lang="scss">
    .blog_conteiner__date {
        display: block;
        margin: 25.25px 0 0 4px;
        font-family: 'Open Sans', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: #d3b000;

        @media screen and ( max-width: 751px ) {
            margin: 50.25px 0 0 0;
            font-size: 27px;
        }
    }
</style>