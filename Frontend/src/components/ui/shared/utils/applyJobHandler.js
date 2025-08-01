import { APPLICATION_API_END_POINT } from "@/utils/constant"
import axios from "axios"


// This jobId is the parameter which will get the id from where the function will called along with id
export const applyJobHanlder = async (jobId) => {
    
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/jobId)`)
    }   

    catch {

    }

}