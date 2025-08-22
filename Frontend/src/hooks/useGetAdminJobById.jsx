import { setSingleAdminJob } from '@/features/jobs/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const useGetAdminJobById = (jobId) => {

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const getAdminJobById = async () => {
        try {

            setLoading(true)
            const res = await axios.get(`${JOB_API_END_POINT}/getJobs/${jobId}` , { withCredentials: true })

            if (res.data.success) {
                dispatch(setSingleAdminJob(res.data.job))
                console.log("single data of job of admin is => " , res)
                setLoading(false)
            }
        }

        catch (err) {
            console.log(err)
            toast(err.response.data.message)
        }

        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getAdminJobById()
    } , [])


    return { getAdminJobById }

}

export default useGetAdminJobById
