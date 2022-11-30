import { initDB } from "~/server/utils/functions";

export default defineEventHandler(async () => await initDB());