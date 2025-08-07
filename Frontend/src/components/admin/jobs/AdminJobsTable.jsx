import React from 'react'

const AdminJobsTable = () => {
  return (
<div>
      <Table className={"my-4"}>
        <TableCaption>A List Of Your Recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className={"text-center"}>Company Name</TableHead>
            <TableHead className={"text-center"}>Role</TableHead>
            <TableHead className={"text-center"}></TableHead>
            <TableHead className={"text-center"}>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {companies.length <= 0 ? (
          <TableCell colSpan={4} className="text-center py-4">No Companies Registered So far.</TableCell>
        ) : (
          <TableBody>



            {

              filterCompany.length == 0 ? 

                <TableRow>
      <TableCell colSpan={4} className="text-center py-4 text-xl">
  No company found with that name of <span className="text-4xl">{companyFilterText}</span>
</TableCell>
    </TableRow> :
            filterCompany.map((company) => (
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

                <TableCell className={"text-center text-md"}>
                  {company?.createdAt.split("T")[0]}
                </TableCell>

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
