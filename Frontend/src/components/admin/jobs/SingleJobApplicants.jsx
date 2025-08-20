import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import React, { useEffect } from 'react'
import TotalApplicantsTable from './TotalApplicantsTable'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constant'
import { data, Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/features/application/applicationSlice'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const SingleJobApplicants = () => {

    
    const params = useParams()
    
    const dispatch = useDispatch()
    
    const {applicants} = useSelector(store=>store.application) 

    console.log(params.id)

    const fetchAllApplicants = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/${params.id}/applicants` , {withCredentials: true})
            
            console.log(res)

            console.log("find applications: " , res.data.FindJobId.applications)

            if (res.data.success) {
                dispatch(setAllApplicants(res.data.FindJobId.applications))
                console.log(setAllApplicants , "set all applicants")
            }
        
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {

        fetchAllApplicants()

    } , [])

  return (
    <div>
        <Navbar/>
        <div className='xl:max-w-7xl md:max-w-5xl max-w-full px-3 md:px-6 m-auto py-6 md:py-24 '   style={{ minHeight: "calc(100vh - 69px)" }}
       >
        <div className='flex items-center gap-4 '>

        <Link to={"/admin/jobs"} >
            <Button variant={"outline"} className={"md:text-xl p-6 md:py-8 cursor-pointer"} >
                
                    <ArrowLeft width={"34"} className='' />
                    <span className='font-semibold' > Back to Admin Jobs </span>
            </Button>
        </Link>

        <h1 className='font-semibold md:text-xl xl:text-2xl' >
            Total Applicants ({applicants.length})
        </h1>

        </div>

        <TotalApplicantsTable applicantsData = {applicants} />

        </div>
        <Footer/>
    </div>
  )
}

export default SingleJobApplicants
