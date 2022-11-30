import { defineStore } from "pinia";
import { apiFetch } from "~~/utils/functions";

interface IBlog {
    id: number | null;
    image: string;
    title: string;
    date: string;
    text: string;
}

type IResponseBlogs = {
    blogs: IBlog[];
    lastId: number;
};

const initBlogs = Array.from({ length: 3 }).map(() => ({
    id: null,
    image: "",
    title: "",
    date: "",
    text: ""
}));

const useBlogs = defineStore("blogs", {
    state: () => ({
        blogs: [] as IBlog[],
        lastId: null as null | number,
        isAllBlogs: false
    }),
    actions: {
        async getBlogs(startBlogIndex?: number) {
            if ( this.isAllBlogs ) return;

            try {
                if ( this.lastId !== 0 ) this.blogs.push(...initBlogs);

                let response: IResponseBlogs | null | string = null;

                if ( startBlogIndex ) {
                    response = await apiFetch<IResponseBlogs>(`/blog/blogs?startBlogIndex=${startBlogIndex}`);
                } else if ( typeof this.lastId === "number" ) {
                    response = await apiFetch<IResponseBlogs>(`/blog/blogs?lastId=${this.lastId}`);
                } else {
                    response = await apiFetch<IResponseBlogs>("/blog/blogs");
                }

                if ( !response ) throw new TypeError("Blog not found.");

                this.blogs = this.blogs.filter(item => item.id !== null);
                this.blogs.push(...response.blogs);
                
                this.lastId = response.lastId;
            } catch (error) {
                this.isAllBlogs = true;
            }
        }
    }
});

export default useBlogs;