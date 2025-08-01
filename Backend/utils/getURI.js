import DataURIParser from "datauri/parser";

import { path } from "path";

const getDataUri = (file) => {
    const parser = new DataURIParser()
    const extName = path.extName(file.originalname).toString()
    return parser.format(extName , file.buffer)
}

export default getDataUri