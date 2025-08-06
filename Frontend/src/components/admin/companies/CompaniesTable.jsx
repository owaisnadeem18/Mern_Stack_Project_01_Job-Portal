import React, { useEffect } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { Avatar, AvatarImage } from '../../ui/avatar'
import { Popover, PopoverContent } from '../../ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Edit2, MoreHorizontalIcon } from 'lucide-react'

const CompaniesTable = ({companies}) => {

    return (
    <div>
<Table className={"my-4"} >
  <TableCaption>A List Of Your Registered Companies</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className={"text-center"}>Logo</TableHead>
      <TableHead className={"text-center"}>Name</TableHead>
      <TableHead className={"text-center"}>Date</TableHead>
      <TableHead className={"text-center"}>Actions</TableHead>
    </TableRow>
  </TableHeader>

        {
            companies.length <= 0 ? <TableCaption>No Companies Registered So far.</TableCaption>
        :
        (
            
  <TableBody>
    <TableRow>

            {
                companies.map((company) => (
<>
      <TableCell className={"flex justify-center items-center"}>
        <Avatar className={"text-center"}>
          <AvatarImage src={company?.logo} />
        </Avatar>
      </TableCell>

      <TableCell className={"text-center"}>
        {company?.name}
      </TableCell>

      <TableCell className={"text-center"}>
        {company?.createdAt}
      </TableCell>

      <TableCell className={"text-center"}>
        <Popover>
          <PopoverTrigger><MoreHorizontalIcon /></PopoverTrigger>
          <PopoverContent className={"w-22 p-2"}>
            <div className='flex items-center justify-center gap-2 p-0'>
              <Edit2 className='cursor-pointer' width={18} />
              <span>Edit</span>
            </div>
          </PopoverContent>
        </Popover>
      </TableCell>
      </>
    ))}
    </TableRow>
  </TableBody>
  
        )
 }
                    
        
</Table>

    </div>
  )
}

export default CompaniesTable
