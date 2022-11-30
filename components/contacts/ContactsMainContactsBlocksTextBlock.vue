<template>
    <div class="main_contacts__blocks___textBlock">
        <p>
            Good design as little design as possible. Good design is to chance. My goal is making something memorable and especially the consumer. Good design is aesthetic. Care and aesthetic. Good design emphasises the consumer. It does not only functional.
        </p>
    </div>
</template>

<style lang="scss">
    .main_contacts__blocks___textBlock {
        background: #f9f9f9;
        width: 464px;
        height: 300px;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        line-height: 32px;
        font-weight: 300;
        color: #323d43;
        
        @media screen and ( max-width: 751px ) {
            margin: 0 0 76px 0;
            width: 100%;
            height: auto;
            background: #f9f9f9;;
            opacity: 0.24;
            font-size: 30px;
            line-height: 47px;
            opacity: 0.24;
        }

        > p {
            margin: 47px 59px 40px 47px;
            width: 77.5%;
            max-width: 77.5%;

            @media screen and ( max-width: 751px ) {
                margin: 69px 99px 0 93px;
                width: 71.6%;
                max-width: 71.6%;
            }

            @media screen and ( max-width: 561px ) {
                margin: 30px 0 30px 0;
                text-align: center;
                width: 100%;
                max-width: 100%;
            }
        }
    }
</style>