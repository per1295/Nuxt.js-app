import { Document } from "mongoose";
import { Blog, BlogModel } from "~/server/utils/models";
import { BlogPageResponse } from "~/server/utils/functions";

interface IQuery {
    lastId?: string;
    startBlogIndex?: string;
}

export default defineEventHandler(async event => {
    let { lastId, startBlogIndex } = getQuery(event) as IQuery;

    let response: Document<any, any, Blog>[] = [];

    if ( startBlogIndex ) {
        response = await BlogModel
        .find({}, { _id: false })
        .where("id")
        .sort({
            id: -1
        })
        .limit(+startBlogIndex + 2);
        response = response.slice(+startBlogIndex);
    } else if ( lastId ) {
        response = await BlogModel
        .find({}, { _id: false })
        .where("id")
        .lt(+lastId)
        .sort({
            id: -1
        })
        .limit(2);

        if ( response.length === 0 ) return "No more blogs for now.";
    } else {
        response = await BlogModel
        .find({}, { _id: false })
        .sort({
            id: -1
        })
        .limit(2);
    }

    lastId = response.at(-1)?.get("id");

    return new BlogPageResponse({ blogs: response, lastId });
});