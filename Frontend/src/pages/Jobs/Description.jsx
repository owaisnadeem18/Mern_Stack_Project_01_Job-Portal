import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// import { applyJobHanlder } from '@/components/ui/shared/utils/applyJobHandler';
import { JobPostedTotalTime } from '@/components/ui/shared/utils/jobUtils';
import { setSingleJob } from '@/features/jobs/jobSlice';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const Description = () => {

  
  const { id } = useParams()
  
  const dispatch = useDispatch()
  
  const {singleJob} = useSelector(store => store?.job)
  console.log(singleJob)
  
  const {user} = useSelector(store => store.auth)
  
  const isInitiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id)

  // "This is to check if the user has already applied for the job or not"

  console.log(isInitiallyApplied)

  const [isApplied, setIsApplied] = useState(isInitiallyApplied || false);



  // Create a handler function to check either the job has been applied or not: 

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/applyJob/${id}` , {withCredentials: true})

      if (res.data.success) {
        console.log(res.data.success)
        toast.success(res.data.message)
      }

    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message)
      
    }
  }



  useEffect(() => {
    const getSingleJob = async () => {
      
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getJobs/${id}` , {withCredentials:true})
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job))
          setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
        }
      }
      
      catch(err) {
        console.log("error fetching the data is => " , err)
      }
      
    } 


    getSingleJob()

  } , [id , dispatch , user._id])

  return (
    <div className="max-w-4xl mx-auto px-6 py-30 shadow-md rounded-lg" style={{minHeight: "calc(100vh - 56px)" }} >
      <div className='border p-8 bg-gray-50 rounded-lg shadow-2xl'>        
      <div className=" flex items-center justify-between mb-4">
        <div>
          <p className='text-gray-200 mb-4 font-semibold' > <span className='text-black' > Job Posted: </span> <Badge variant={"ghost"} className='text-sm font-bold bg-gray-700' > {JobPostedTotalTime(singleJob?.createdAt) === 0 ? "Today" : `${JobPostedTotalTime(singleJob?.createdAt)} days ago` } </Badge> </p>

          <h2 className="text-xl font-semibold text-gray-800">{singleJob?.title}</h2>
          <p className="text-gray-600">{singleJob?.location}</p>
        </div>


            <Button variant={"outline"} className={"w-18 h-18"} size={"icon"} >
              <Avatar className={"w-16 h-16"} >

                <AvatarImage
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUApzo4eHxKJuQNV_Gi_BVYGYjR_hcMrhqQ&s"} // Add logo image path here if needed
                  alt="Company Logo"
                  className="rounded-full object-cover"
                  />
              
              </Avatar>
            </Button>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2"></h3>
      <p className="text-gray-700 mb-6">
        {singleJob?.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Badge className="font-semibold bg-blue-900 text-white text-sm px-3 py-1 rounded-full">
          Experience : {singleJob?.experience}
        </Badge>
        <Badge className="font-semibold bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
          Positions: {singleJob?.position}
        </Badge>
        <Badge className="font-semibold bg-yellow-200 text-yellow-900 text-sm px-3 py-1 rounded-full">
           {singleJob?.salary?.toLocaleString("en-IN")}/PKR
        </Badge>
        <Badge className="font-semibold bg-gray-500 text-white text-sm px-3 py-1 rounded-full">
          Job Type: {singleJob?.jobType}
        </Badge>
      </div>

    <div className='flex justify-between flex-row flex-wrap gap-5 md:gap-2 items-start my-4' >

        <div className="font-semibold flex sm:items-center flex-col sm:flex-row gap-2 text-sm py-1 rounded-lg">
          <h3>
          Job Requirements: 
          </h3>
          
          <div >
          {singleJob?.requirements.map((req , index) => <Badge key={index} variant={"ghost"} className={"bg-gray-800 mx-1 my-2 sm:my-2 text-white shadow-lg"} > {req} </Badge>)}

          </div>
                 
        </div>

        <div className="font-semibold bg-gray-200 text-sm px-3 py-1 rounded-lg">
          Applicants: {singleJob?.applications?.length <= 0 ? "No Applicants" : singleJob?.applications?.length }
        </div>
    </div>

      <div className="flex flex-col sm:flex-row gap-4">
        
      <Button
          onClick={ isApplied ? null : applyJobHandler }
          disabled={isApplied}
          className={`px-6 py-2 rounded-lg shadow-md transition font-bold ${
            isApplied
              ? "bg-gray-400 text-white hover:bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>

        <Button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition">
          <Link to={"/jobs"} >
            Back to Listings
          </Link>
        </Button>
      </div>
      
      </div>
    </div>
  );
};

export default Description;
