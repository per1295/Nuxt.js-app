<template>
    <div ref="rootElRef" class="main_whatWeDo__works___item"
    @pointerover="isMobileOrTablet.value ? undefined : overItem($event)"
    @pointerout="isMobileOrTablet.value ? undefined : outItem($event)"
    @click="isMobileOrTablet.value ? callSetIsPointerOnDocumentFalse(overItem)($event) : undefined"
    >
        <nuxt-img class="main_whatWeDo__works___item____image" :src="src" :alt="`item_${index}`"/>
        <div class="main_whatWeDo__works___item____backface"
        @click="setImgClickedTrue(), setNowImgSrc(src)">
            Item
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { PropType } from "vue";
    import { storeToRefs } from "pinia"

    defineProps({
        src: {
            type: String as PropType<string>,
            required: true
        },
        index: {
            type: Number as PropType<number>,
            required: true
        }
    });

    const indeStore = useIndex();
    const { isMobile, isPointerOnDocument } = storeToRefs(indeStore);

    const downloadImageStore = useDownloadImage();
    const { setImgClickedTrue, setNowImgSrc } = downloadImageStore;

    const isMobileOrTablet = computed(() => isMobile || isNotComputer());

    const rootElRef = ref();

    function overItem(event: PointerEvent) {
        const currentTarget = rootElRef.value as HTMLDivElement, target = event.target as HTMLElement,
        backfaceElement = currentTarget.children[1], addclassName = "main_whatWeDo__works___item____backfaceActive";
        if ( currentTarget !== target && backfaceElement.classList.contains(addclassName) ) return;
        backfaceElement.classList.add(addclassName);
    };

    function outItem(event: PointerEvent) {
        const currentTarget = rootElRef.value as HTMLDivElement, relatedTarget = event.relatedTarget as HTMLElement,
        backfaceElement = currentTarget.children[1], addclassName = "main_whatWeDo__works___item____backfaceActive";
        if ( currentTarget.contains(relatedTarget) ) return;
        backfaceElement.classList.remove(addclassName);
    };

    watch(isPointerOnDocument, (nowValue) => {
        if ( !nowValue ) return;
        let obj = { currentTarget: rootElRef.value } as unknown as PointerEvent;
        outItem(obj);
    });
</script>

<style lang="scss">
    .main_whatWeDo__works___item {
        position: relative;
        width: 317px;
        height: 300px;
        background-color: #524e3f;
        cursor: pointer;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            height: 565px;
        }
    }

    .main_whatWeDo__works___item____image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;

        @media screen and ( max-width: 751px ) {
            width: 100%;
            height: 100%;
        }
    }

    .main_whatWeDo__works___item____backface {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #021725;
        filter: opacity(0);
        transition: filter .3s ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #ffffff;
        z-index: 5;
    }

    .main_whatWeDo__works___item____backfaceActive {
        filter: opacity(.7);
        transition: filter .3s ease-in;
    }
</style>