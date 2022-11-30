<template>
    <Head>
        <Title>{{ pageTitle }}</Title>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <Link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
    </Head>
    <nuxt-page />
    <global-nav-links />
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';

    useWindowListeners(
        [ "resize", "orientationchange", "load", "pointerdown", "pointermove" ],
        [ createResizeFn(), createOrientationChangeFn(), loadFn, pointerDownFn, pointerMoveFn ]
    );

    const route = useRoute();

    const index = useIndex();
    const { isMobile } = storeToRefs(index);

    watch([ route, isMobile ], (nowValues) => {
        const [ nowRoute, nowIsMobile ] = nowValues;

        resetMenu();
        scrollToTop();

        nowRoute.meta.pageTransition = {
            name: nowIsMobile ? "vanish-mobile" : "vanish",
            mode: "out-in"
        }
    });

    const pageTitle = computed(() => {
        const parsedPath = route.path.replace(/\//g, "");
        return parsedPath.split("").map((item, index) => index === 0 ? item.toUpperCase() : item).join("");
    });

    const menuNavbarStore = useMenuNavbar();
    const { isMenuOpen } = storeToRefs(menuNavbarStore);

    watch(isMenuOpen, nowValue => {
        const bodyStyle = document.body.style;
        if ( nowValue ) {
            bodyStyle.touchAction = "pan-up";
            bodyStyle.overflowY = "hidden";
        } else {
            bodyStyle.removeProperty("touch-action");
            bodyStyle.removeProperty("overflow-y");
        }
    });
</script>

<style lang="scss">
    body {
        margin: 0 auto;
        padding: 0;
        height: 100%;
        width: 100%;

        & {
            scrollbar-width: thin;
            scrollbar-color: #d4af37 #505d68;
        }

        &::-webkit-scrollbar-button {
            display: none;
        }

        &::-webkit-scrollbar {
            width: 15px;
            background-color: #505d68;
        }

        &::-webkit-scrollbar-thumb {
            height: 12px;
            background-color: #d4af37;
            border-radius: 20px;
            border: 3px solid #505d68;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #ffc400;
        }
    }

    .vanish-enter-active, .vanish-leave-active, .vanish-mobile-leave-active, .vanish-mobile-enter-active {
        transition: all .6s;
    }

    .vanish-enter-from, .vanish-leave-to {
        filter: grayscale(50%) blur(10px);
        transform: translateX(-100%)
    }

    .vanish-mobile-enter-from, .vanish-mobile-leave-to {
        filter: blur(10px);
    }
</style>