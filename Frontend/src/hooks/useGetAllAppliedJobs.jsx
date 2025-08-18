import { setAllAppliedJobs } from '@/features/jobs/jobSlice'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAppliedJobs = () => {

    const dispatch = useDispatch()

    const getAppliedJobs = async () => {
        try {

            const res = await axios.get(`${APPLICATION_API_END_POINT}/getAppliedJobs` , {withCredentials: true} )
            
            console.log(res)
            alert("jfcjksdfjksd")
            if (res.data.success) {
                dispatch(setAllAppliedJobs(res.data.findApplicants))
            }

        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAppliedJobs()
    } , [] )

}

export default useGetAllAppliedJobs
