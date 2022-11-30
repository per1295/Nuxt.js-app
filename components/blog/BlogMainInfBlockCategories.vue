<template>
    <div class="inf_block__categories">
        <span
        v-for="( category, index ) of CATEGORIES"
        :key="index"
        class="inf_block__categories___category"
        @pointerenter="addClass($event, 'category_active')"
        @pointerleave="removeClass($event, 'category_active')"
        >
            {{ category }}
        </span>
        <br>
    </div>
</template>

<script setup lang="ts">
    const CATEGORIES = [ "Art", "Business", "Design", "Code" ];
</script>

<style lang="scss">
    .inf_block__categories {
        margin: 34px 0 0 0;

        @media screen and ( max-width: 751px ) {
            margin: 62.525px 0 0 0;
        }

        .inf_block__categories___category {
            display: block;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            line-height: 26px;
            font-weight: 300;
            font-style: italic;
            color: #021725;
            transition: color .25s ease-out;
            cursor: pointer;

            @media screen and ( max-width: 751px ) {
                font-size: 29.9px;
                line-height: 59px;
            }
        }

        .category_active {
            transition: color .25s ease-in;
            color: #d3b000;
        }
    }
</style>