import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { Avatar, AvatarImage } from '../../ui/avatar'
import { Popover, PopoverContent } from '../../ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontalIcon } from 'lucide-react'

const CompaniesTable = () => {
    
  
    return (
    <div>
      <Table className={"my-4"} >
        <TableCaption>A List Of Your Registered Companies</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead className={"text-center"} > Logo  </TableHead>
                <TableHead className={"text-center"} > Name  </TableHead>
                <TableHead className={"text-center"} > Date  </TableHead>
                <TableHead className={"text-center"} > Actions  </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableCell className={"flex justify-center items-center"} >
                <Avatar className={"text-center"} >
                    <AvatarImage src = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUApzo4eHxKJuQNV_Gi_BVYGYjR_hcMrhqQ&s"} />
                </Avatar>
            </TableCell>
            <TableCell className={"text-center"} >
                Company Name
            </TableCell>
            <TableCell className={"text-center"} >
                Company Created Date
            </TableCell>
            <TableCell className={"text-center"} >
                <Popover>
                    <PopoverTrigger><MoreHorizontalIcon/></PopoverTrigger>
                    <PopoverContent className={"w-32 p-2"} >
                        <div className='flex items-center justify-center gap-4 p-0' >
                            <Edit2 width={20} />
                            <span>Edit</span>
                        </div>   
                    </PopoverContent>
                </Popover>
            </TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default CompaniesTable
