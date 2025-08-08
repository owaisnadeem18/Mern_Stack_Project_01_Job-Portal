import Footer from '@/components/ui/shared/Footer' 
import Navbar from '@/components/ui/shared/Navbar'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import { setFilterJobByText } from '@/features/jobs/jobSlice'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'

const AdminJobs = () => {

  const [input , setInput] = useState("")

  const { allAdminJobs } = useSelector(store => store.job);
console.log("Redux allAdminJobs =>", allAdminJobs);

  return (
    <>
    <Navbar />
    <div className='max-w-[60%] pt-15 mx-auto' style={{ minHeight: "calc(100vh - 69px)" }} >

      <div className='flex items-center justify-between'>

        <Input
          className="w-fit px-3 py-2 border border-gray-300 rounded-sm shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          placeholder-gray-400 transition-all duration-200"
          placeholder="Filter by Job Name"
          onChange={(e) => setInput(e.target.value)}
          />

        <Button className={"cursor-pointer"} onClick={() => navigate("/admin/jobs/post-job")} >
          New Job
        </Button>
      
      </div>

      <AdminJobsTable />

      </div>
    <Footer/>
    </>
  )
}

export default AdminJobs
