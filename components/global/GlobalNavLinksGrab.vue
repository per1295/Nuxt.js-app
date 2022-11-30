<template>
    <div class="navLinks_grab" @pointerenter="setOnGrabTrue()" @pointerleave="setOnGrabFalse()">
        <div class="navLinks_grab__lines" v-for="num in 3" :key="num">
            <div class="navLinks_grab__lines___line first"></div>
            <div class="navLinks_grab__lines___line second"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from "pinia";

    const menuNavbarStore = useMenuNavbar();
    const { yGrabPercent } = storeToRefs(menuNavbarStore);
    const { setOnGrabTrue, setOnGrabFalse } = menuNavbarStore;

    watch(yGrabPercent, (nowValue, oldValue) => {
        const firstLines = document.getElementsByClassName("navLinks_grab__lines___line first") as HTMLCollectionOf<HTMLDivElement>;
        const secondLines = document.getElementsByClassName("navLinks_grab__lines___line second") as HTMLCollectionOf<HTMLDivElement>;
        const isValueGreaterThenOldValue = nowValue > oldValue;

        Array.from(firstLines).forEach(line => {
            const classList = line.classList;
            if ( nowValue !== 0 && nowValue < 110 ) {
                if ( isValueGreaterThenOldValue ) {
                    classList.remove("rotate_pos");
                    classList.add("rotate_neg");
                } else {
                    classList.remove("rotate_neg");
                    classList.add("rotate_pos");
                }
            } else {
                classList.remove("rotate_pos", "rotate_neg");
            }
        });

        Array.from(secondLines).forEach(line => {
            const classList = line.classList;
            if ( nowValue !== 0 && nowValue < 110 ) {
                if ( isValueGreaterThenOldValue ) {
                    classList.remove("rotate_neg");
                    classList.add("rotate_pos");
                } else {
                    classList.remove("rotate_pos");
                    line.classList.add("rotate_neg");
                }
            } else {
                line.classList.remove("rotate_pos", "rotate_neg");
            }
        });
    });
</script>

<style lang="scss">
    .navLinks_grab {
        display: none;

        @media screen and ( max-width: 751px ) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(36, 47, 53, .7);;

            .navLinks_grab__lines {
                display: flex;
                width: 50%;
                justify-content: center;
                height: 15px;
                align-items: center;

                .navLinks_grab__lines___line {
                    background: rgba(212, 175, 55, 1);
                    height: 3px;
                    width: 20%;
                    border-radius: 3px;
                    transition: .2s linear;

                    @media screen and ( min-width: 600px ) {
                        width: 15%;
                    }
                }

                .first {
                    margin: 0 -.7px 0 0;
                }

                .second {
                    margin: 0 0 0 -.7px;
                }
            }
        }
    }

    .rotate_pos {
        transform: rotate(10deg);
    }

    .rotate_neg {
        transform: rotate(-10deg);
    }
</style>