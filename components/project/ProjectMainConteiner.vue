<template>
    <div class="main_conteiner">
        <project-main-conteiner-left-colum/>
        <project-main-conteiner-right-colum/>
    </div>
</template>

<style lang="scss">
    .main_conteiner {
        background: #f9f9f9;
        width: 90%;
        min-width: 90%;
        margin: 84px 0 0 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media screen and ( max-width: 751px ) {
            flex-direction: column;
            justify-content: flex-start;
            margin: 149px 0 0 0;
        }

        @media screen and ( min-width: 250px ) and ( max-width: 731px ) {
            align-items: center;
        }
    }
</style>