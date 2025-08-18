// This is my custom hook to get all jobs

import { setAllJobs } from '@/features/jobs/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {

    const dispatch = useDispatch()

    const {searchQuery} = useSelector(store => store?.job)

    useEffect(() => {
        const getAllJobs = async () => {
            try{
                const res = await axios.get(`${JOB_API_END_POINT}/getJobs?keyword=${searchQuery}` , {
                    withCredentials: true
                })

                console.log(res.data)

                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            }
            catch(err) {
                console.log(err)
            }
        }

        getAllJobs()

    } , [])

}

export default useGetAllJobs
