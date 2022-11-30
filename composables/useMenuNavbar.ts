import { defineStore } from "pinia";

const useMenuNavbar = defineStore("menuNavbar", {
    state: () => ({
        isMenuOpen: false,
        yGrabPercent: 110,
        wasDownOnGrab: false
    }),
    actions: {
        openMenu() {
            this.isMenuOpen = true;
        },
        closeMenu() {
            this.isMenuOpen = false;
        },
        setYGrabPercent(percent: number) {
            this.yGrabPercent = percent;
        },
        setOnGrabTrue() {
            this.wasDownOnGrab = true;
        },
        setOnGrabFalse() {
            this.wasDownOnGrab = false;
        }
    }
});

export default useMenuNavbar;