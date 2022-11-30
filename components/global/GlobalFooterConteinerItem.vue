<template>
    <span class="footer_conteiner__item" :style="additionalStyles">
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
    import type { PropType, CSSProperties } from "vue";

    defineProps({
        additionalStyles: {
            type: Object as PropType<CSSProperties>
        }
    });
</script>