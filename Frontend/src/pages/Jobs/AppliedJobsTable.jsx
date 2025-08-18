import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useGetAllAppliedJobs from '@/hooks/useGetAllAppliedJobs'
import React from 'react'
import { useSelector } from 'react-redux'

const AppliedJobsTable = () => {

    useGetAllAppliedJobs()

    const { allAppliedJobs } = useSelector(store => store?.job)

    console.log(allAppliedJobs)

    const formatExperience = (exp) => {
        if (!exp) return "Not Specified"

        if (exp.toString().toLowerCase().includes("year")) {
            return exp
        }

        if (parseInt(exp) === 1) {
            return `${exp} year`
        }

        return `${exp} years`

    }

    return (

        <div>
            <h3 className="text-lg font-semibold text-white" >
                Total Applied Jobs are <span className='font-extrabold' > ({allAppliedJobs.length})</span>
            </h3>
            <Table className={"border mt-3 rounded-2xl text-white border-gray-400 "} >
                <TableCaption> A list of your Applied Jobs</TableCaption>
                <TableHeader className={"bg-gray-800 font-bold"} >
                    <TableRow >
                        <TableHead className={"text-white font-extrabold text-center underline"} >Date</TableHead>
                        <TableHead className={"text-white font-extrabold text-center underline"} >Company Name</TableHead>
                        <TableHead className={"text-white font-extrabold text-center underline"} >Job Title</TableHead>
                        <TableHead className={"text-white font-extrabold text-center underline"} >Location</TableHead>
                        <TableHead className={"text-white font-extrabold text-center underline"} >Job Type</TableHead>
                        <TableHead className={"text-white font-extrabold text-center underline"} >Experience</TableHead>
                        <TableHead className={"text-white font-extrabold underline"} >Status</TableHead>
                    </TableRow>   
                </TableHeader>
                <TableBody className={"text-center"} >


                    {

                        allAppliedJobs.length === 0 ? (
                            <TableRow>


                                <TableCell colSpan={4} className="text-center py-6 font-bold text-lg">
                                    No Applied Jobs Found
                                </TableCell>

                            </TableRow>) :

                            allAppliedJobs.map((item) => {


                                const statusClasses = {
                                    pending: "bg-yellow-500 text-black",
                                    accepted: "bg-green-700",
                                    rejected: "bg-red-600",
                                };

                                const defaultClass = "bg-none"

                                const statusClass = statusClasses[item.status.toLowerCase() || defaultClass]

                                console.log("status class is = >", statusClass)

                                return (

                                    <TableRow key={item._id} >

                                        <TableCell>
                                            {item?.job?.createdAt?.split("T")[0]}
                                        </TableCell>
                                        <TableCell>
                                            {item?.job?.company?.name}
                                        </TableCell>
                                        <TableCell>
                                            {item?.job?.title}

                                        </TableCell>
                                        <TableCell>
                                            {item?.job?.location}

                                        </TableCell>
                                        <TableCell>
                                            {item?.job?.jobType}
                                        </TableCell>
                                        <TableCell>
                                            {formatExperience(item?.job?.experience)}
                                        </TableCell>


                                        <TableCell className={"text-left"} >
                                            <Badge variant={"outline"} className={`font-semibold text-white ${statusClass}`} > {item.status.split("")[0].toUpperCase() + item.status.slice(1)} </Badge>
                                        </TableCell>
                                    </TableRow>
                                )
                            }

                            )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AppliedJobsTable
