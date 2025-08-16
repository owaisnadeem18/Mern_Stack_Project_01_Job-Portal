import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CheckCircle, MoreHorizontal, XCircle, XCircleIcon } from 'lucide-react';

const TotalApplicantsTable = () => {
  
    
    const shortListingStatus = [
        { status: "Accepted" , icon: <CheckCircle className="h-5 w-5 text-green-600" aria-label="Accepted" /> } ,
        { status: "Rejected" , icon: <XCircle className="h-5 w-5 text-red-600" aria-label="Rejected" />}
    ]
  
    return (
    <Table className={"my-8"} >
        <TableCaption>List of Job Applicants</TableCaption>
        <TableHeader> 
            <TableRow>
                <TableHead className={"text-center font-semibold text-lg"} >Full Name</TableHead>
                <TableHead className={"text-center font-semibold text-lg"} >Email</TableHead>
                <TableHead className={"text-center font-semibold text-lg"} >Contact</TableHead>
                <TableHead className={"text-center font-semibold text-lg"} >Resume</TableHead>
                <TableHead className={"text-center font-semibold text-lg"} >Date</TableHead>
                <TableHead className={"text-center font-semibold text-lg"} >Actions</TableHead>
            </TableRow>       
        </TableHeader>

        <TableBody className={"text-center"} >
  <TableRow>
    <TableCell>Full Name</TableCell>
    <TableCell>Email</TableCell>
    <TableCell>Contact</TableCell>
    <TableCell>Resume</TableCell>
    <TableCell>Date</TableCell>
    <TableCell>
      <Popover>
        <PopoverTrigger>
          <MoreHorizontal className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent className="w-fit p-0">
          {shortListingStatus.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer gap-2 p-2 items-center hover:bg-gray-900 hover:text-white hover:rounded-sm transition-all duration-300"
            >
              <p>{item.status}</p>
              <span>{item.icon}</span>
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </TableCell>
  </TableRow>
</TableBody>


    </Table>
  )
}

export default TotalApplicantsTable
