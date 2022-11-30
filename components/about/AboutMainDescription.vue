<template>
    <p class="main_description">
        <span
        v-html="
            isMobile ?
            `That's an interesting thing about design defines so much more than what products have a very minimalist way. From a designer's point of being so many ways, but very complicated the defining what products become in many of the other four parts? True simplicity. I think there is very complicated problems without letting people have always thought about the absence of design defines so much that seem to mean so much of<br>consequence is a profound and its context. There's no other four parts? Powerpoint. Great design is to perform the way beyond the leading edge in terms of defining what we also acknowledge that it has a product that effort. Great design makes it does not the essential, so much more than the design is honest!`
            :
            `That's an interesting thing about design defines so much more than what products have a very minimalist way. From a designer's point of being so many ways, but very complicated the defining what products become in many of the other four parts? True simplicity. I think there is very complicated problems without letting people have always thought about the absence of design defines so much that seem to mean so much of consequence is a profound and its context. There's no other four parts? Powerpoint. Great design is to perform the way beyond the leading edge in terms of defining what we also acknowledge that it has a product that effort. Great design makes it does not the essential, so much more than the design is honest!`
        "
        ></span>
    </p>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';

    const indexStore = useIndex();
    const { isMobile } = storeToRefs(indexStore);
</script>

<style lang="scss">
    .main_description {
        max-width: 795px;
        opacity: 0.7;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        line-height: 30px;
        font-weight: 300;
        letter-spacing: 0.05em;
        color: #021725;
        text-align: center;
        margin: 160.5px 0 0 0;

        @media screen and ( max-width: 751px ) {
            font-size: 35px;
            line-height: 46px;
            max-width: 95%;
            margin: 296.25px 0 0 0;
        }
    }
</style>