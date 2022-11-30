<template>
    <div class="main_whoWeAreSecond">
        <global-category-h3 title="Who We Are"/>
        <global-category-p title="The Amazing People Behind This"
        :additional-styles="isMobile ? { 'margin': '14.5px 0 0 0' } : {}"
        />
        <global-category-description
        :additional-styles="isMobile ? { 'margin': '72.75px 0 0 0' } : { 'margin': '40.5px 0 0 0' }"
        >
            Typi non habent claritatem insitam; est usus <span v-html="BR_MOBILE_HTML"></span> legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
        </global-category-description>
        <home-main-who-we-are-second-people/>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { storeToRefs } from "pinia";

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);

    const BR_MOBILE_HTML = computed(() => (
        isMobile.value ? "<br>" : ""
    ));
</script>

<style lang="scss">
    .main_whoWeAreSecond {
        margin: 162px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 306px 0 0 0;
        }
    }
</style>