import { readFile } from "fs/promises";
import { join } from "path";

export default defineEventHandler(async event => {
    const { filename, ext } = getQuery(event);
    
    const path = join(process.cwd(), `.output/public${filename}.${ext}`);
    const fileName = path.match(/(?<=[\/\\])[\w\_]+?\.\w+$/)?.toString() as string;
    const file = await readFile(path);

    setHeaders(event, {
        "Content-Disposition": `attachment; filename=${fileName}`,
        "Content-Type": `image/${ext}`
    });

    return file;
});