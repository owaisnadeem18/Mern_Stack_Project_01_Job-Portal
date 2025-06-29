import React from 'react'
import LatestJobsCards from './LatestJobsCards'

const LatestJobs = () => {

  return (
<div className=" max-w-9xl mx-auto my-10 ">
      <h2 className="text-3xl md:text-5xl font-semibold px-2 leading-snug text-center">
        <span className="text-purple-700 font-bold">Job Opportunities</span>
        <span className="text-gray-800 font-semibold"> – Your </span>
        <span className="text-purple-700 font-semibold">Future</span>
        <span className="text-gray-800  font-semibold"> Starts Here</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center px-5 md:px-10 lg:px-20 justify-center my-8 '>
        <LatestJobsCards /> 
    </div>

    </div>
  )
}

export default LatestJobs
