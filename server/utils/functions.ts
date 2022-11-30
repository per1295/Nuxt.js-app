import { BlogModel, InfPostModel, LastPostModel } from "./models";
import type { Blog, InfPost, LastPost } from "./models";
import mongoose from "mongoose";

export function logError<TypeError extends Error>(error: TypeError): TypeError {
    console.error(error.name + ": " + error.message);
    return error;
}

interface IArgv {
    [key: string]: string;
}

interface IParsedArgv {
    env: string;
}

export function getArgs(): IParsedArgv {
    const argv = process.argv.slice(2, process.argv.length);
    const parsedArgs = {} as IArgv;

    argv.forEach(item => {
        const [ key, value ] = item.split("=");
        parsedArgs[key] = value.toLowerCase();
    });

    return parsedArgs as unknown as IParsedArgv;
}

interface IBlogPageResponse {
    [key: string]: any;
}

export class BlogPageResponse implements IBlogPageResponse {
    [key: string]: any;

    constructor(props: IBlogPageResponse) {
        for ( let [ key, value ] of Object.entries(props) ) {
            this[key] = value;
        }
    }
}

export async function initDB() {
    try {
        const runtimeConfig = useRuntimeConfig();
        const { LOCAL_MONGODB_URI, MONGODB_URI } = runtimeConfig;
        const connection = mongoose.connection;

        if ( connection.readyState !== 1 && connection.readyState !== 2 ) {
            const connectString = process.env.NODE_ENV === "production" ? MONGODB_URI : LOCAL_MONGODB_URI;

            await mongoose.connect(connectString, { dbName: "vue-app" });

            const blogsLength = (await BlogModel.find({})).length;
            const inf_postsLength = (await InfPostModel.find({})).length;
            const postsLength = (await LastPostModel.find({})).length;

            if ( blogsLength === 0 ) {
                const blogs = (await import("~/assets/db/blogs.json")).default as Blog[];
                await BlogModel.insertMany(blogs);
            };
            if ( inf_postsLength === 0 ) {
                const inf_posts = (await import("~/assets/db/inf_posts.json")).default as InfPost[];
                await InfPostModel.insertMany(inf_posts);
            };
            if ( postsLength === 0 ) {
                const posts = (await import("~/assets/db/posts.json")).default as LastPost[];
                await LastPostModel.insertMany(posts);
            };
        }
    } catch (error) {
        logError(error as Error);
    }
}