import React from 'react'
import { Table, TableCaption, TableHead, TableHeader, TableRow } from '../ui/table'

const CompaniesTable = () => {
  return (
    <div>
      <Table className={"my-4"} >
        <TableCaption>A List Of Your Registered Companies</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead> Logo  </TableHead>
                <TableHead> Name  </TableHead>
                <TableHead> Date  </TableHead>
                <TableHead> Actions  </TableHead>
            </TableRow>
        </TableHeader>
      </Table>
    </div>
  )
}

export default CompaniesTable
