<template>
    <component :is="isMobile ? BlogMainBlogs : null" :start-blog-index="2"/>
    <div class="wrapButton">
        <transition name="post-button" mode="out-in">
            <blog-all-blogs-text v-if="isAllBlogs"/>
            <global-custom-button v-else :additional-styles="additionalStyleCustomButton" :additional-listener="() => getBlogs()">
                Load More Posts
            </global-custom-button>
        </transition>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const BlogMainBlogs = resolveComponent("BlogMainBlogs");

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const blogsStore = useBlogs();
    const { isAllBlogs } = storeToRefs(blogsStore);
    const { getBlogs } = blogsStore;

    const additionalStyleCustomButton = computed(() => {
        const additionalStyle = {
            margin: "61px 0 0 0"
        };
        const additionalStyleMobile = {
            margin: "62px 0 60px 0",
            width: "88.1%",
            maxWidth: "451px",
            height: "112px",
            fontSize: "30.4px",
            fontWeight: 300,
            letterSpacing: "0.05em"
        };
        
        return isMobile.value ? additionalStyleMobile : additionalStyle;
    });
</script>

<style lang="scss">
    .wrapButton {
        background: transparent;

        @media screen and ( max-width: 751px ) {
            background-color: #f9f9f9;
            max-width: 673px;
            width: 89.8%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .post-button-enter-active, .post-button-leave-active {
        transition: transform .25s linear, opacity .25s linear;
    }

    .post-button-enter-from, .post-button-leave-to {
        transform: translateX(-20px);
        opacity: 0;
    }
</style>