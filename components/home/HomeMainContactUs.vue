<template>
    <div class="main_contactUs">
        <global-category-h3 title="Contact Us"/>
        <global-category-p title="Work With Us"/>
        <home-main-contact-us-conteiner/>
    </div>
</template>

<style lang="scss">
    .main_contactUs {
        margin: 162px 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        @media screen and ( min-width: 751px ) and ( max-width: 1280px ) {
            width: 100%;
            max-width: 100%;
        }

        @media screen and ( max-width: 751px ) {
            margin: 305px 0 0 0;
        }
    }
</style>