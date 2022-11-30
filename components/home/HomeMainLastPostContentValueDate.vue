<template>
    <p class="main_lastPost__content___value____data">
        {{ parsedData }}
    </p>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";
    
    const postDataStore = usePostData();
    const { postData } = storeToRefs(postDataStore);

    const parsedData = computed(() => {
        const dataArray = postData.value.date.split(".");
        const monthName = getMonthName(+dataArray[1]);
        dataArray.splice(1, 1, monthName);
        return dataArray.join(" ");
    });
</script>

<style lang="scss">
    .main_lastPost__content___value____data {
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        margin: 0;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #505d68;

        @media screen and ( max-width: 751px ) {
            opacity: 0.7;
            font-size: 28px;
            font-weight: 300;
            color: #021725;
            letter-spacing: normal;
        }
    }
</style>