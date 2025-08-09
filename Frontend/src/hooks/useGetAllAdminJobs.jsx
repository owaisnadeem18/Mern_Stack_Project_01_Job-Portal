import { setAllAdminJobs } from "@/features/jobs/jobSlice"
import { JOB_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"

const useGetAllAdminJobs = () => {
  
    const dispatch = useDispatch()

    useEffect(() => {
        // Custom Hook to get all jobs posted by admin
        const getAllJobsByAdmin = async () => {

            try {
                const res = await axios.get(`${JOB_API_END_POINT}/adminJobs` , {withCredentials:true})
                
                console.log(res)
                alert("API called successfully")

                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.adminJobId))
                    toast.success(res.data.message)
                }
            }

            catch(err) {
                console.log(err)
                toast.error(err.response.data.message)
            }
            
        } 

        getAllJobsByAdmin()

    } , [])

}

export default useGetAllAdminJobs
