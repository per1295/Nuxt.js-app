<template>
    <span class="main_bottom__content___item____part">
        <slot></slot>
    </span>
</template>

<style lang="scss">
    .main_bottom__content___item____part {
        @media screen and ( max-width: 751px ) {
            font-size: 34.2px;
            line-height: 56px;
            font-weight: 300;
            letter-spacing: 0.05em;
            color: #505d68;
        }
    }
</style>