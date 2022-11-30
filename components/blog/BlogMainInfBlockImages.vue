<template>
    <div class="inf_block__images">
        <nuxt-img
        v-for="( src, index ) of INF_BLOCK_IMAGES"
        :key="index"
        :src="src"
        alt="block_images__image"
        class="inf_block__image___image"
        />
    </div>
</template>

<script setup lang="ts">
    const INF_BLOCK_IMAGES = [
        "/blog/rectangle_652_blog.png",
        "/blog/rectangle_656_blog.png",
        "/blog/rectangle_660_blog.png",
        "/blog/rectangle_664_blog.png"
    ];
</script>

<style lang="scss">
    .inf_block__images {
        margin: 32px 0 0 0;
        display: flex;
        flex-direction: column;
        row-gap: 3px;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            margin: 59px 0 0 0;
            row-gap: 5px;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
            width: 100%;
        }
    }
</style>