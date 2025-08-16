import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import React, { useEffect } from 'react'
import TotalApplicantsTable from './TotalApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { data, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/features/application/applicationSlice'

const SingleJobApplicants = () => {

    const {applicants} = useSelector(store => store?.application)

    console.log(applicants)

    const params = useParams()

    const dispatch = useDispatch()

    console.log(params.id)

    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants` , {withCredentials: true})
                
                console.log(res)

                if (data.res.success) {
                    dispatch(setAllApplicants(res.data.FindJobId.applications))
                }
            
            } catch (err) {
                console.log(err)
            }
        }

        fetchAllApplicants()

    } , [])

  return (
    <div>
        <Navbar/>
        <div className='xl:max-w-7xl md:max-w-5xl max-w-full px-3 md:px-6 m-auto py-6 md:py-24 '   style={{ minHeight: "calc(100vh - 69px)" }}
       >
        <h1 className='font-semibold text-xl md:text-2xl' >
            Total Applicants (3)
        </h1>

        <TotalApplicantsTable/>

        </div>
        <Footer/>
    </div>
  )
}

export default SingleJobApplicants
