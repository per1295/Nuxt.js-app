<template>
    <div class="main_blogs__blog">
        <div class="main_blogs__blog___conteiner">
            <nuxt-img
            :src="(image || base64Placeholder)"
            alt="image_blog"
            :placeholder="[637, 425, 80]"
            :modifiers="{ grayscale: true }"
            :additional-style="additionalStyleForImg"
            :style="additionalStyleForImg"
            />
            <template v-if="typeof id !== 'object'">
                <blog-main-blogs-blog-title :title="title" />
                <blog-main-blogs-blog-date :date="date"/>
                <blog-main-blogs-blog-text :text="text"/>
                <global-custom-button :additional-styles="additionalStyleForCustomButton">
                    Read More
                </global-custom-button>
            </template>
            <p v-else class="loading_text">
                {{ loading }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";
    import { storeToRefs } from "pinia";

    const props = defineProps({
        image: {
            type: String as PropType<string>,
            required: true
        },
        title: {
            type: String as PropType<string>,
            required: true
        },
        date: {
            type: String as PropType<string>,
            required: true
        },
        text: {
            type: String as PropType<string>,
            required: true
        },
        id: {
            type: [ Number, null ] as PropType<null | number>,
            required: true
        }
    });

    const loading = useLoading(typeof props.id !== "object")

    const base64Placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==";

    const indexStore = useIndex();
    const { isMobile, isMiddleDevice } = storeToRefs(indexStore);

    const additionalStyleForImg = computed(() => {
        const additionalStyleForImgMobileAndTablet = {
            width: "100%"
        };
        const additionalStyleForImg = {
            margin: '0 0 0 5px'
        };

        return isMobile.value || isMiddleDevice ? additionalStyleForImgMobileAndTablet : additionalStyleForImg;
    });

    const additionalStyleForCustomButton = computed(() => {
        const additionalStyle = {
            margin: "67px 0 31px 4px",
            width: "191px",
            height: "48px",
            fontSize: "16px",
            lineHeight: "32px",
            fontWeight: 300,
            letterSpacing: "0.05em"
        };
        const additionalStyleMobile = {
            margin: "126px 0 60px 0",
            width: "92.6%",
            maxWidth: "360px",
            height: "91px",
            fontSize: "30.4px",
            lineHeight: "60px",
            fontWeight: 300,
            letterSpacing: "0.05em"
        };

        return isMobile.value ? additionalStyleMobile : additionalStyle;
    });
</script>

<style lang="scss">
    .main_blogs__blog {
        width: 100%;
        background-color: #ffffff;

        .main_blogs__blog___conteiner {
            margin: 32px 0 0 29px;

            @media screen and ( max-width: 751px ) {
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
            }

            @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
                margin: 32px 18px 0 18px;
            }
        }
    }

    .loading_text {
        margin-top: 30px;
        font-family: 'Open-Sans', sans-serif;
        font-size: 14px;
        line-height: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #60606e;
    }
</style>