import type { Document } from "mongoose";
import { InfPost, InfPostModel } from "~/server/utils/models";
import { BlogPageResponse } from "~/server/utils/functions";

interface IQuery {
    lastId?: string;
    startBlogIndex?: string;
}

export default defineEventHandler(async event => {
    let { lastId } = getQuery(event) as IQuery;

    let response: Document<any, any, InfPost>[] = [];

    if ( lastId ) {
        response = await InfPostModel
        .find({}, { _id: false })
        .where("id")
        .lt(+lastId)
        .sort({
            id: -1
        })
        .limit(6);

        if ( response.length === 0 ) return "No more posts for now.";
    } else {
        response = await InfPostModel
        .find({}, { _id: false })
        .sort({
            id: -1
        })
        .limit(6);
    }

    lastId = response.at(-1)?.get("id");

    return new BlogPageResponse({ posts: response, lastId });
});