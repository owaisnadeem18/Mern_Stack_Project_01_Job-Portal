import DataURIParser from "datauri/parser.js";
import path  from "path";

const datauri = (file) => {
    const parser = new DataURIParser()
    const extName = path.extname(file.originalname).toString()
    return parser.format(extName , file.buffer)
}

export default datauri