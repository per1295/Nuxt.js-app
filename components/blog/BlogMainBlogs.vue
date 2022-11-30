<template>
    <div class="main_blogs" :style="additionalStyle" :class="additionalClass">
        <transition-group name="blogs-list" :appear="true">
            <blog-main-blogs-blog
            v-for="blog of filteredBlogs"
            :key="(blog.id || 'gap')"
            :id="blog.id"
            :image="blog.image"
            :title="blog.title"
            :date="blog.date"
            :text="blog.text"
            />
        </transition-group>
    </div>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";

    const props = defineProps({
        maxCount: {
            type: Number as PropType<number>
        },
        startBlogIndex: {
            type: Number as PropType<number>
        },
        additionalStyle: {
            type: Object as PropType<CSSProperties>,
        },
        additionalClass: {
            type: String
        }
    });

    const blogsStore = useBlogs();
    const { getBlogs } = blogsStore;
    const { blogs } = storeToRefs(blogsStore);

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const filteredBlogs = computed(() => {
        if ( isMobile.value && ( props.maxCount || props.startBlogIndex ) ) {
            return blogs.value.slice(props.startBlogIndex ?? 0, props.maxCount);
        }
        return blogs.value;
    });

    onMounted(() => {
        if ( isMobile.value && props.startBlogIndex ) return getBlogs(props.startBlogIndex);
        if ( blogs.value.length === 0 ) getBlogs();
    });
</script>

<style lang="scss">
    .main_blogs {
        width: 666px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        row-gap: 57px;


        @media screen and ( max-width: 751px ) {
            width: 74.5%;
            row-gap: 120px;
            max-width: 558px;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
            width: 55%;
        }
    }

    .blogs-list-enter-active,
    .blogs-list-leave-active,
    .blogs-list-move {
        transition: all .5s ease;
    }

    .blogs-list-enter-from,
    .blogs-list-leave-to {
        opacity: 0;
        transform: translateX(-20px);
    }
</style>