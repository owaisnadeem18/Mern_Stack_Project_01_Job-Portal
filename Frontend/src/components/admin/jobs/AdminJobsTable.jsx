import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Edit2, MoreHorizontalIcon, User, UserCircle, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = ({adminJobs}) => {

  console.log(adminJobs)
  
  const [filterAdminJobs , setFilterAdminJobs] = useState(adminJobs)
  
  const { filterJobsByText } = useSelector(store => store.job)
  
  console.log(filterJobsByText)
  
  const navigate = useNavigate()
  
  useEffect(() => {

  const FilterAllAdminJobs = () => {
    
  const filteredJob = adminJobs.length > 0 && adminJobs.filter((job) => {
 
    if (!filterJobsByText) {
      return true
    }
    
    return job?.title.toLowerCase().includes(filterJobsByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(filterJobsByText.toLowerCase())
 
  })
  setFilterAdminJobs(filteredJob)
}

      FilterAllAdminJobs()
    } , [filterJobsByText , adminJobs ])

  return (
  
    <div>
      <Table className={"my-4"}>
        <TableCaption>A List Of Your Recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className={"text-center font-bold "}>Company</TableHead>
            <TableHead className={"text-center font-bold "}>Job Title</TableHead>
            <TableHead className={"text-center font-bold "}>Required Experience</TableHead>
            <TableHead className={"text-center font-bold "}>Total Positions</TableHead>
            <TableHead className={"text-center font-bold "}>Employment Type</TableHead>
            <TableHead className={"text-center font-bold "}>Location</TableHead>
            <TableHead className={"text-center font-bold "}>Date</TableHead>
            <TableHead className={"text-center font-bold "}>Salary</TableHead>
            <TableHead className={"text-center font-bold "}>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {adminJobs.length <= 0 ? (
          <TableCell colSpan={9} className="text-center py-4 text-lg font-semibold">No Jobs Posted So far.</TableCell>
        ) : (
          <TableBody>
            {
              filterAdminJobs.length <= 0 ?
                <TableRow>
                  <TableCell colSpan={6} className="text-center w-full py-4 text-xl">
                    No company found with that name of <span className="text-4xl">{filterJobsByText}</span>
                  </TableCell>
                </TableRow> :
                filterAdminJobs?.map((job) => (
                  <TableRow key={job._id} >

                    <TableCell className={"text-center font-semibold text-md"}>
                      <div className='flex justify-center items-center gap-3' >

                      <Avatar className={"text-center"}>
                        <AvatarImage
                          size={"icon"}
                          className={"w-32"}
                          src={job?.company?.logo}
                          />
                      </Avatar>
                      {job?.company?.name}
                        </div>
                    </TableCell>

                    <TableCell className={"text-center font-semibold text-md"}>
                      {job?.title}
                    </TableCell>

                    <TableCell className="text-center font-semibold text-md">
                      {
                        job?.experience ? job.experience.toString().includes("year" || "years") ? job.experience : `${job.experience} ${Number(job.experience) > 1 ? "years" : "year"}` : "Not Specified"
                      }
                    </TableCell>

                    <TableCell className={"text-center font-semibold text-md"}>
                      {job?.position}
                    </TableCell>

                    <TableCell className={"font-semibold text-md text-center"}>
                      {job?.jobType}
                    </TableCell>

                    <TableCell className={"font-semibold text-md text-center"}>
                      {job?.location}
                    </TableCell>

                    <TableCell className={"text-center font-semibold text-md"}>
                      {job?.createdAt.split("T")[0]}
                    </TableCell>

                    
                    <TableCell className={"text-center font-semibold text-md"}>
                      {job?.salary.toLocaleString("en-IN")} / mo
                    </TableCell>

                    <TableCell className={"text-center"}>
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontalIcon className="cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className={"w-32 p-2"}>
                          <div className="flex items-start flex-col justify-center gap-2 p-0">
                            <div onClick={() => navigate(`/admin/jobs/${job._id}`)} className='flex gap-2 items-center cursor-pointer' >
                              <Edit2 width={18} />
                              <span>Edit</span>
                            </div>
                          <div className='flex gap-2 cursor-pointer items-center' onClick={() => navigate(`/admin/jobs/applicants/${job._id}`)} >

                            <User className="cursor-pointer" width={18} />
                            <span>Applicants</span>
                          
                          </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        )}
      </Table>
    </div>
  )
}

export default AdminJobsTable
