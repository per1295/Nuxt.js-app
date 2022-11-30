import { LastPostModel } from "~~/server/utils/models";

export default defineEventHandler(async () => {
    const response = await LastPostModel.findOne({}, { _id: false });
    return response;
});