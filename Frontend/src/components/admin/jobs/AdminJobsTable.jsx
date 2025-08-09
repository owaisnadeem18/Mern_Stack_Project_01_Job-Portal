import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit2, MoreHorizontalIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminJobsTable = ({adminJobs}) => {
  
  console.log("Admin jobs" , adminJobs)

  const [filterAdminJobs , setFilterAdminJobs] = useState(adminJobs)
  
  const { filterJobByText } = useSelector(store => store.job)

  const navigate = useNavigate()

  
  
  const FilterAllAdminJobs = () => {
    
  const filteredJob = adminJobs.length > 0 && filterAdminJobs.filter((job) => {
    if (!filterJobByText) {
      return true
    }
    
    return job?.title.toLowerCase().includes(filterJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(filterJobByText.toLowerCase())
 
    
  })
  setFilterAdminJobs(filteredJob)
}

    useEffect(() => {
      FilterAllAdminJobs()
    } , [])

    console.log("FIltered jobs " , filterAdminJobs)

  return (
  
    <div>
      <Table className={"my-4"}>
        <TableCaption>A List Of Your Recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className={"text-center"}>Job Name</TableHead>
            <TableHead className={"text-center"}>Role</TableHead>
            <TableHead className={"text-center"}>Date</TableHead>
            <TableHead className={"text-center"}>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {filterAdminJobs.length <= 0 ? (
          <TableCell colSpan={4} className="text-center py-4">No Jobs Posted So far.</TableCell>
        ) : (
          <TableBody>
            {
              filterAdminJobs.length == 0 ?
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-4 text-xl">
                    No company found with that name of <span className="text-4xl">{companyFilterText}</span>
                  </TableCell>
                </TableRow> :
                filterAdminJobs?.map((company) => (
                  <TableRow key={company._id} >
                    <TableCell className={"flex justify-center items-center"}>
                      <Avatar className={"text-center"}>
                        <AvatarImage
                          size={"icon"}
                          className={"w-32"}
                          src={company?.logo}
                        />
                      </Avatar>
                    </TableCell>

                    <TableCell className={"text-center font-semibold text-md"}>
                      {company?.name}
                    </TableCell>

                    {/* <TableCell className={"text-center text-md"}>
                      {company?.createdAt.split("T")[0]}
                    </TableCell> */}

                    <TableCell className={"text-center"}>
                      <Popover>
                        <PopoverTrigger>
                          <MoreHorizontalIcon className="cursor-pointer" />
                        </PopoverTrigger>
                        <PopoverContent className={"w-24 p-2"}>
                          <div className="flex items-center justify-center gap-2 p-0">
                            <Edit2 onClick={() => navigate(`/admin/companies/${company._id}`)} className="cursor-pointer" width={18} />
                            <span>Edit</span>
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
