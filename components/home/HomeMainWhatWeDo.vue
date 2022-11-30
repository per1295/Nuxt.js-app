<template>
    <div class="main_whatWeDo">
        <global-category-h3 title="What We Do"/>
        <global-category-p title="Show Your Amazing Work"/>
        <global-main-what-we-do-works/>
    </div>
</template>

<style lang="scss">
    .main_whatWeDo {
        margin: 163px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 303px 0 0 0;
        }
    }
</style>