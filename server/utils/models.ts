import { Schema, model } from "mongoose";

export interface LastPost {
    imgForComputer: string;
    imgForMobile: string;
    date: string;
    title: string;
    content: string;
}

const lastPostSchema = new Schema<LastPost>({
    imgForComputer: String,
    imgForMobile: String,
    date: String,
    title: String,
    content: String
}, {
    collection: "posts"
});

export const LastPostModel = model("post", lastPostSchema);

export interface InfPost {
    id: number;
    title: string;
}

const infPostSchema = new Schema<InfPost>({
    id: Number,
    title: String
}, {
    collection: "inf_posts"
});

export const InfPostModel = model("inf_post", infPostSchema);

export interface Blog {
    id: number;
    image: string;
    title: string;
    date: string;
    text: string;
}

const blogSchema = new Schema<Blog>({
    id: Number,
    image: String,
    title: String,
    date: String,
    text: String
}, {
    collection: "blogs"
});

export const BlogModel = model("blog", blogSchema);