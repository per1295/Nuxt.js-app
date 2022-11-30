<template>
    <div>
        <slot></slot>
        <global-download />
        <global-footer :additional-styles="additionalStyleForFooter" />
    </div>
</template>

<script setup lang="ts">
    import type { CSSProperties } from 'vue';
    import { storeToRefs } from 'pinia';

    const route = useRoute();
    const additionalStyleForFooter = ref<CSSProperties | undefined>(undefined);

    const index = useIndex();
    const { isMobile } = storeToRefs(index);

    watch([ route, isMobile ], (nowValues) => {
        const [ nowRoute, nowIsMobile ] = nowValues;

        const path = nowRoute.path.replace(/\//g, "").toLowerCase();

        switch(path) {
            case "about":
                additionalStyleForFooter.value = { 'margin': '0' };
                break;
            case "contacts":
                additionalStyleForFooter.value = { 'margin': `${nowIsMobile ? 148 : 86}px 0 0 0` };
                break;
            case "project":
                additionalStyleForFooter.value = { margin: `${nowIsMobile ? 32 : 73}px 0 0 0` };
                break;
            case "work":
                additionalStyleForFooter.value = nowIsMobile ? { 'margin': '0' } : { 'margin': '6px 0 0 0' };
                break;
        }
    });
</script>