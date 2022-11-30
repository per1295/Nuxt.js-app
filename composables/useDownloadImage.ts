import { defineStore } from "pinia";

const useDownloadImage = defineStore("downloadImage", {
    state: () => ({
        wasImgClicked: false,
        nowImgSrc: ""
    }),
    actions: {
        setImgClickedTrue() {
            this.wasImgClicked = true;
        },
        setImgClickedFalse() {
            this.wasImgClicked = false;
        },
        setNowImgSrc(src: string) {
            this.nowImgSrc = src;
        }
    }
});

export default useDownloadImage