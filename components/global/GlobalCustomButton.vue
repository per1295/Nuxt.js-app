<template>
    <button ref="rootElRef" class="customButton"
    :style="additionalStyles"
    @pointerover="isMobileOrTablet.value ? undefined : overButton()"
    @pointerout="isMobileOrTablet.value ? undefined : outButton()"
    @click="clickListener($event)"
    >
        <slot>
            Read More About Us
        </slot>
    </button>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";

    const props = defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        },
        additionalListener: {
            type: Function as PropType<Function>
        }
    });

    const rootElRef = ref();

    const indexStore = useIndex();
    const { isPointerOnDocument, isMobile } = storeToRefs(indexStore);

    const isMobileOrTablet = computed(() => isMobile || isNotComputer());

    watch(isPointerOnDocument, (nowValue) => {
        if ( !isMobileOrTablet.value ) return;
        if ( nowValue ) outButton();
    });

    function overButton() {
        const buttonElement = rootElRef.value as HTMLButtonElement;
        buttonElement.classList.add("customButtonActive");
    };

    function outButton() {
        const buttonElement = rootElRef.value as HTMLButtonElement;
        buttonElement.classList.remove("customButtonActive");
    };

    function clickListener<TypeEvent extends Event>(event: TypeEvent) {
        if ( isMobileOrTablet.value ) callSetIsPointerOnDocumentFalse(overButton)();
        if ( props.additionalListener ) props.additionalListener(event);
    };
</script>

<style lang="scss">
    .customButton {
        width: 238px;
        height: 57px;
        border: 1px solid #000000;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 32px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #021725;
        background-color: #ffffff;
        padding: 0;
        cursor: pointer;
        transition: color .3s ease-out, background-color .3s ease-out;

        @media screen and ( max-width: 751px ) {
            width: 452px;
            height: 108px;
            font-family: 'Open Sans';
            font-size: 27px;
        }

        @media screen and ( max-width: 680px ) {
            width: 80%;
        }
    }

    .customButtonActive {
        color: #ffffff;
        background-color: #000000;
        transition: color .3s ease-in, background-Color .3s ease-in;
    }
</style>