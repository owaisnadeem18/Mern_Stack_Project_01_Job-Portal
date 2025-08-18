import React, { useEffect } from 'react'
import Job from '../Jobs/Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery } from '@/features/jobs/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const BrowseJobs = () => {

  useGetAllJobs()
    
  const {allJobs} = useSelector(store=> store?.job) 
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""))
    } 
  } , [] )


  console.log("allJobs in BrowseJobs => " , allJobs)

    return (
    <div className='max-w-9xl bg-gradient-to-br from-gray-500 to-gray-800 py-4 px-7'
    style={{minHeight: "calc(100vh - 69px)" }}
    >
      <h3 className='text-white text-2xl font-bold my-6' >
        Search Jobs ({ allJobs.length })
      </h3>

        <div className='grid gap-6 md:my-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3' >

            {
                allJobs.map((item) => {
                    return (
                        <Job job={item}  key={item._id} />
                    )
                    
                })
            }

        </div>

    </div>
  )
}

export default BrowseJobs
