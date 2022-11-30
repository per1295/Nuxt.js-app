<template>
    <p class="main_contactUs__conteiner___data____item_____p">
        <slot></slot>
    </p>
</template>

<style lang="scss">
    .main_contactUs__conteiner___data____item_____p {
        margin: 44.75px 0 0 0;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        font-size: 19px;
        line-height: 34px;
        font-weight: 300;
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: 0.03em;
        color: #505d68;

        @media screen and ( max-width: 751px ) {
            margin: 68.5px 0 0 0;
            max-width: 230px;
            opacity: 0.7;
            font-size: 30px;
            font-weight: 400;
            color: #323d43;
            letter-spacing: normal;
            line-height: 48px;
        }
    }
</style>