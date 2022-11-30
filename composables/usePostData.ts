import { defineStore } from "pinia";
import { apiFetchDataProgress } from "~~/utils/functions";

interface IPostData {
    imgForComputer: string;
    imgForMobile: string;
    date: string;
    title: string;
    content: string;
}

const usePostData = defineStore("postData", {
    state: () => ({
        postData: {
            imgForComputer: "",
            imgForMobile: "",
            date: "",
            title: "",
            content: ""
        },
        postDataProgress: {
            nowLength: 0,
            length: 0
        }
    }),
    getters: {
        isPostLoaded: state => {
            const { nowLength, length } = state.postDataProgress;
            if ( nowLength === 0 || length === 0 ) return false;
            return nowLength * 100 / length === 100 ? true : false;
        }
    },
    actions: {
        async getPostData() {
            const postDataGenerator = apiFetchDataProgress("/home/postData");
            
            while(true) {
                const loading = await postDataGenerator.next();
                if ( loading.done ) {
                    const data = JSON.parse(loading.value) as IPostData;
                    this.postData = data;
                    break;
                };
                const [ nowLength, length ] = loading.value;
                if ( this.postDataProgress.length === 0 ) this.postDataProgress.length = length;
                this.postDataProgress.nowLength = nowLength;
            }
        }
    }
});

export default usePostData;