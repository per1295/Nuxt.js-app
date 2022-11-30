import { defineStore } from "pinia";
import { apiFetch } from "~~/utils/functions";

interface IPost {
    id: number | null;
    title: string;
}

type IResponsePosts = {
    posts: IPost[];
    lastId: number;
};

const initPosts = Array.from({ length: 3 }).map(() => ({
    id: null,
    title: ""
}));

const usePosts = defineStore("posts", {
    state: () => ({
        posts: [] as IPost[],
        lastId: null as null | number,
        isAllPosts: false
    }),
    actions: {
        async getPosts() {
            if ( this.isAllPosts ) return;

            try {
                if ( this.lastId !== 0 ) this.posts.push(...initPosts);

                let response: IResponsePosts | null | string = null;
            
                if ( typeof this.lastId === "number" ) {
                    response = await apiFetch<IResponsePosts>(`/blog/posts?lastId=${this.lastId}`);
                } else {
                    response = await apiFetch<IResponsePosts>("/blog/posts");
                }

                if ( !response ) return;

                this.posts = this.posts.filter(item => item.id !== null);
                this.posts.push(...response.posts);

                this.lastId = response.lastId;
            } catch (error) {
                this.isAllPosts = true;
            }
        }
    }
});

export default usePosts;