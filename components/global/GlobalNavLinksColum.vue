<template>
    <div class="navLinks_colum">
        <nuxt-link v-for="( item, index ) of LIST_NAV_LINKS"
        :key="index"
        :to="`/${item}`"
        class="navLinks_colum__link"
        active-class="navLinks_colum__link_active"
        @pointerenter="new RegExp(`${item}$`, 'i').test(route.path) ? undefined : pointerEnter($event)"
        @pointerleave="new RegExp(`${item}$`, 'i').test(route.path) ? undefined : pointerLeave($event)"
        >
            {{ item }}
        </nuxt-link>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();

    const LIST_NAV_LINKS = [ "home", "about", "work", "project", "contacts", "blog" ];

    function pointerEnter<TypeEvent extends Event>(event: TypeEvent) {
        const aElement = event.currentTarget as HTMLAnchorElement;
        aElement.classList.add("navLinks_colum__link_hover");
    };

    function pointerLeave<TypeEvent extends Event>(event: TypeEvent) {
        const aElement = event.currentTarget as HTMLAnchorElement;
        aElement.classList.remove("navLinks_colum__link_hover");
    };
</script>

<style lang="scss">
    .navLinks_colum {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        background: rgba(212, 175, 55, .7);;
        padding: 40px 0 0 40px;
        height: calc(100% - 40px);
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        @media screen and ( max-width: 751px ) {
            padding: 0;
            width: 100%;
            max-width: 100%;
            height: 100%;
            align-items: center;
        }

        @media screen and ( max-height: 606px ) {
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            align-content: center;
            flex-wrap: wrap;
        }

        .navLinks_colum__link {
            text-decoration: none;
            text-transform: uppercase;
            font-family: 'Open Sans', sans-serif;
            font-size: 30px;
            line-height: 48px;
            font-weight: 400;
            color: #323d43;
            transition: color .3s ease-out;

            @media screen and ( max-width: 751px ) {
                text-align: center;
                line-height: 94px;
            }
        }

        .navLinks_colum__link_hover {
            transition: color .3s ease-in;
            color: #3282ad;
        }

        .navLinks_colum__link_active {
            color: #304592;
        }
    }
</style>