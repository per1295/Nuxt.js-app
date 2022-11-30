<template>
    <p class="categoryDescription" :style="additionalStyles">
        <slot>
            Typi non habent claritatem insitam; est usus <span v-html="BR_MOBILE_HTML"></span> legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc, fiant sollemnes in futurum.
        </slot>
    </p>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";
    import { storeToRefs } from "pinia";

    defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const BR_MOBILE_HTML = computed(() => isMobile.value ? "<br>" : "");
</script>

<style lang="scss">
    .categoryDescription {
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #021725;
        max-width: 800px;
        width: 800px;
        text-align: center;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 95%
        }

        @media screen and ( max-width: 751px ) {
            font-size: 29px;
            line-height: 52px;
            font-weight: 300;
            max-width: 94%;
            width: 94%;
            letter-spacing: normal;
        }
    }
</style>