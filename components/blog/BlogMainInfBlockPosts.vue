<template>
    <div class="inf_block__posts" @scroll="onScroll($event)">
        <span
        v-for="postTitle of posts"
        :key="(postTitle.id || 'gap')"
        class="inf_block__posts___post"
        @pointerenter="addClass($event, 'post_active')"
        @pointerleave="removeClass($event, 'post_active')"
        >
            {{ typeof postTitle.id !== "object" ? postTitle.title : loading }}
        </span>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const postsStore = usePosts();
    const { getPosts } = postsStore;
    const { posts } = storeToRefs(postsStore);

    onMounted(() => {
        if ( posts.value.length === 0 ) getPosts();
    });

    const loading = useLoading();

    function onScroll(event: UIEvent) {
        const elem = event.currentTarget as HTMLDivElement;
        const { scrollHeight, scrollTop, clientHeight } = elem;
        if ( Math.floor( scrollHeight - scrollTop - clientHeight ) > 50 ) getPosts();
    }
</script>

<style lang="scss">
    .inf_block__posts {
        margin: 33px 0 0 0;
        max-height: 104px;
        overflow-y: scroll;

        & {
            scrollbar-width: 0;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-webkit-scrollbar-thumb {
            height: 0;
        }

        @media screen and ( max-width: 751px ) {
            margin: 61.525px 0 0 0;
        }

        .inf_block__posts___post {
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

        .post_active {
            color: #d3b000;
        }
    }
</style>