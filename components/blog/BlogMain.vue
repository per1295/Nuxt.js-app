<template>
    <main>
        <div class="main_conteiner">
            <div class="main_conteiner__wrap" :class="mobileAfterBlockAppear">
                <blog-main-blogs :max-count="isMobile ? 2 : undefined"/>
                <blog-main-inf/>
            </div>
            <blog-after-blogs/>
        </div>
    </main>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const blogsStore = useBlogs();
    const { blogs } = storeToRefs(blogsStore);

    const mobileAfterBlockAppear = computed(() => {
        if ( blogs.value === null ) return undefined;
        const isAfterBlogAppear = blogs.value.length > 2;

        if ( isMobile.value && isAfterBlogAppear ) {
            return "afterBlogAppear";
        }

        return undefined;
    });
</script>

<style scoped lang="scss">
    main {
        width: 100%;
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .main_conteiner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin: 78px 0 0 0;
            width: calc(90% - 133px);
            background: #f9f9f9;
            padding: 64px 70px 65px 63px;

            @media screen and ( max-width: 751px ) {
                margin: 97px 0 0 0;
                padding: 0;
                width: 100%;
                background: #ffffff;
            }

            @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                padding: 64px 0 65px 0;
            }

            .main_conteiner__wrap {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                width: 100%;

                @media screen and ( max-width: 751px ) {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                    justify-content: space-around;
                }
            }

            .afterBlogAppear {
                margin: 0 0 174.25px 0;
            }
        }
    }
    .post-button-enter-active,
    .post-button-leave-active {
        transition: all 1s linear;
    }

    .post-button-enter-from,
    .post-button-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }
</style>