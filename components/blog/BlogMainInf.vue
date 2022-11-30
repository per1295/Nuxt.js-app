<template>
    <div class="main_conteiner__inf">
        <blog-main-inf-block title="Recent Posts">
            <blog-main-inf-block-posts/>
        </blog-main-inf-block>
        <blog-main-inf-block title="Categories">
            <blog-main-inf-block-categories/>
        </blog-main-inf-block>
        <blog-main-inf-block title="Projects">
            <blog-main-inf-block-images/>
        </blog-main-inf-block>
    </div>
</template>

<style lang="scss">
    .main_conteiner__inf {
        position: sticky;
        top: 20px;
        max-height: calc(100vh - 20px);
        overflow-y: scroll;
        width: 297px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        row-gap: 57px;

        & {
            scrollbar-width: 0;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-webkit-scrollbar-thumb {
            height: 0;
        }

        @media screen and ( max-width: 751px ) {
            position: static;
            max-height: none;
            overflow-y: auto;
            background: #f9f9f9;
            max-width: 673px;
            width: 89.8%;
            padding: 174.25px 0 0 0;
            align-items: center;
        }

        @media screen and ( min-width: 751px ) and ( max-width: 1241px ) {
            width: 40%;
        }
    }
</style>