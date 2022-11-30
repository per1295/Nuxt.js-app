<template>
    <div class="main_whoWeAreSecond__people___item____conteiner">
        <slot></slot>
    </div>
</template>

<style lang="scss">
    .main_whoWeAreSecond__people___item____conteiner {
        margin: 20px 0 0 16px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            margin: 29.75px 0 0 30px;
        }

        @media screen and ( max-width: 680px ) {
            margin: 29.75px 0 0 23px;
        }
    }
</style>