<template>
    <div class="preloader_progress__bar"></div>
</template>

<style lang="scss">
    @keyframes progressBar {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(300%);
        }
    }

    .preloader_progress__bar {
        height: 100%;
        width: 25%;
        background-color: #d4af37;
        animation: progressBar 2.5s linear infinite alternate;

        @media screen and ( min-width: 751px ) and ( max-width: 1281px ) {
            animation: progressBar 1.5s linear infinite alternate;
        }

        @media screen and ( max-width: 751px ) {
            animation: progressBar 1s linear infinite alternate;
        }
    }
</style>