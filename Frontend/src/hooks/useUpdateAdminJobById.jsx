import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'sonner'

const useUpdateAdminJobById = () => {

    const [loading, setLoading] = useState(false)

    const updateAdminJobById = async (jobId , jobData) => {
        try {

            setLoading(true)

            const res = await axios.put(`${JOB_API_END_POINT}/updateJob/${jobId}`, jobData, { withCredentials: true })

            if (res.data.success) {
                toast(res.data.message)
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

    return { updateAdminJobById, loading }

}

export default useUpdateAdminJobById
