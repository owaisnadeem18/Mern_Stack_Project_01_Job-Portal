import { APPLICATION_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { toast } from "sonner"


// This jobId is the parameter which will get the id from where the function will called along with id
export const applyJobHanlder = async (jobId) => {
    
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/applyJob/${jobId}` , {withCredentials: true} )
 
        if (res.data.success) {
            toast.success(res.data.message)
        }
    }

    catch (err) {
        console.log(err)
        toast.error(err.response.data.message)
    }

}