import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { JobPostedTotalTime } from '@/components/ui/shared/utils/jobUtils';
import { setSingleJob } from '@/features/jobs/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Description = () => {
  const isApplied = false; // Change this to true to show "Already Applied"

  const { id } = useParams()

  const dispatch = useDispatch()

  const {singleJob} = useSelector(store => store?.job)

  const {user} = useSelector(store => store.auth)


  useEffect(() => {
    const getSingleJob = async () => {
      
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/getJobs/${id}` , {withCredentials:true})
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job))
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

    <div className='flex justify-between flex-wrap gap-5 md:gap-0 items-center my-4' >

        <div className="font-semibold flex gap-2 text-sm py-1 rounded-lg">
          Job Requirements: {singleJob?.requirements.map((req , index) => <Badge key={index} variant={"ghost"} className={"bg-gray-800 text-white shadow-lg "} > {req} </Badge>)}
                 
        </div>

        <div className="font-semibold bg-gray-200 text-sm px-3 py-1 rounded-lg">
          Applicants: {singleJob?.applications?.length <= 0 ? "No Applicants" : singleJob?.applications?.length }
        </div>
    </div>

      <div className="flex flex-col sm:flex-row gap-4">
        {!isApplied ? (
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-md transition">
            Apply Now
          </Button>
        ) : (
          <Button disabled={isApplied} className="bg-gray-400 text-black font-bold px-6 py-2 rounded-sm cursor-not-allowed">
            Already Applied
          </Button>
        )}

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
