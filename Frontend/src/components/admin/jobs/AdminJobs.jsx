import Footer from '@/components/ui/shared/Footer' 
import Navbar from '@/components/ui/shared/Navbar'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import { setFilterJobsByText } from '@/features/jobs/jobSlice'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'


const AdminJobs = () => {

  useGetAllAdminJobs()

  const [input , setInput] = useState("")

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(setFilterJobsByText(input))
  } , [input])

  const { allAdminJobs } = useSelector(store => store?.job)

  return (
    <>
    <Navbar />
    <div className='max-w-[60%] pt-15 mx-auto' style={{ minHeight: "calc(100vh - 69px)" }} >

      <div className='flex items-center justify-between'>

        <Input
          className="w-1/4 px-3 py-2 border border-gray-300 rounded-sm shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          placeholder-gray-400 transition-all duration-200"
          placeholder="Filter by Job Name & Company Name"
          onChange={(e) => setInput(e.target.value)}
          />

        <Button className={"cursor-pointer"} onClick={() => navigate("/admin/jobs/post-job")}>
          New Job
        </Button>
      
      </div>

        <AdminJobsTable adminJobs={allAdminJobs} />

      </div>
    <Footer/>
    </>
  )
}

export default AdminJobs
