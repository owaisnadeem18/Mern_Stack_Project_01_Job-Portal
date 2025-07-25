import React from 'react'
import Job from '../Jobs/Job'

const BrowseJobs = () => {

    let randomJobsArray = [1, 4 ,23]

    return (
    <div className='max-w-9xl bg-gradient-to-br from-gray-500 to-gray-800 py-4 px-7'
    style={{minHeight: "calc(100vh - 56px)" }}
    >
      <h3 className='text-white text-2xl font-bold my-6' >
        Search Jobs ({ randomJobsArray.length })
      </h3>

        <div className='grid gap-6 md:my-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3' >

            {
                randomJobsArray.map((item , idx ) => {
                    return (
                        <Job key={idx} />
                    )
                    
                })
            }

        </div>

    </div>
  )
}

export default BrowseJobs
