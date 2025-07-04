import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const AppliedJobsTable = () => {
  return (
    <div>
      <Table className={"border mt-3 rounded-2xl text-white border-gray-400 "} >
        <TableCaption> A list of your Applied Jobs</TableCaption>
        <TableHeader className={"bg-gray-800 font-bold"} >
            <TableRow >
                <TableHead className={"text-white font-extrabold text-center underline"} >Date</TableHead>
                <TableHead className={"text-white font-extrabold text-center underline"} >Job Role</TableHead>
                <TableHead className={"text-white font-extrabold text-center underline"} >Job Type</TableHead>
                <TableHead className={"text-white font-extrabold underline"} >Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className={"text-center"} >
            {
                [1, 4 ,6 ,2 ,7 ,2 ,98].map((item , idx) => (
                    <TableRow key={idx} >
                        <TableCell>
                            23 June 2025
                        </TableCell>
                        <TableCell>
                            Full Time
                        </TableCell>
                        <TableCell>
                            FrontEnd Developer
                        </TableCell>
                        <TableCell className={"text-left"} >
                            <Badge variant={"outline"} className={"text-white"} > selected </Badge>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobsTable
