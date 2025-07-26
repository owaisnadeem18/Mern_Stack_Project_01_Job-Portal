import React from 'react'
import LatestJobsCards from './LatestJobsCards'
import { useSelector } from 'react-redux'
import { store } from '@/redux/store'

const LatestJobs = () => {

  const {allJobs} = useSelector(store => store.job)

  return (
<div className=" max-w-9xl mx-auto py-2 bg-gradient-to-br ">
      <h2 className="text-3xl md:text-5xl font-semibold px-2 leading-snug text-center">
        <span className="text-purple-700 font-bold">Job Opportunities</span>
        <span className="text-gray-800 font-semibold"> – Your </span>
        <span className="text-purple-700 font-semibold">Future</span>
        <span className="text-gray-800  font-semibold"> Starts Here</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center px-5 md:px-10 lg:px-20 justify-center my-8'>
        {
          allJobs.length <= 0 ? <span>No Jobs Found</span> : allJobs.slice(0,6).map((job) => <LatestJobsCards key={job._id}  job= {job} /> ) 
        }
    </div>

    </div>
  )
}

export default LatestJobs
