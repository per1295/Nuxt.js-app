<template>
    <div class="preloader">
        <global-custom-preloader-progress/>
    </div>
</template>

<style lang="scss">
    .preloader {
        height: 100%;
        width: 100%;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f9f9f9;
        z-index: 100;
    }
</style>