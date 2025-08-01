import React from 'react'
import Job from '../Jobs/Job'
import { useSelector } from 'react-redux'

const BrowseJobs = () => {
    
  const {allJobs} = useSelector(store=> store?.job)

  console.log("allJobs in BrowseJobs => " , allJobs)

    return (
    <div className='max-w-9xl bg-gradient-to-br from-gray-500 to-gray-800 py-4 px-7'
    style={{minHeight: "calc(100vh - 56px)" }}
    >
      <h3 className='text-white text-2xl font-bold my-6' >
        Search Jobs ({ allJobs.length })
      </h3>

        <div className='grid gap-6 md:my-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3' >

            {
                allJobs.map((item , idx ) => {
                    return (
                        <Job job={item}  key={idx} />
                    )
                    
                })
            }

        </div>

    </div>
  )
}

export default BrowseJobs
