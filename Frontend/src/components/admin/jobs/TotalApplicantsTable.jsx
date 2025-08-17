import React, { useState } from 'react'
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
import { CheckCircle, Loader, MoreHorizontal, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import axios from 'axios';

const TotalApplicantsTable = ({ applicantsData }) => {
  // Track both applicant id AND status type
  const [loading, setLoading] = useState({ id: null, status: null });

  const shortListingStatus = [
    { status: "Accepted", apiLoaderText: "Accepting", icon: <CheckCircle className="h-5 w-5 text-green-600" aria-label="Accepted" /> },
    { status: "Rejected", apiLoaderText: "Rejecting", icon: <XCircle className="h-5 w-5 text-red-600" aria-label="Rejected" /> }
  ];

  const statusHandler = async (status, id) => {
    try {
      setLoading({ id, status }); // ✅ track applicant + status
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading({ id: null, status: null });
    }
  };

  return (
    <Table className="my-8">
      <TableCaption>List of Job Applicants</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center font-semibold text-lg">Full Name</TableHead>
          <TableHead className="text-center font-semibold text-lg">Email</TableHead>
          <TableHead className="text-center font-semibold text-lg">Contact</TableHead>
          <TableHead className="text-center font-semibold text-lg">Resume</TableHead>
          <TableHead className="text-center font-semibold text-lg">Date</TableHead>
          <TableHead className="text-center font-semibold text-lg">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="text-center">
        {applicantsData.map(applicant => (
          <TableRow key={applicant._id}>
            <TableCell>{applicant.applicant.fullName}</TableCell>
            <TableCell>{applicant.applicant.email}</TableCell>
            <TableCell>{applicant.applicant.phoneNumber}</TableCell>
            <TableCell className="text-center font-semibold">
              {applicant.applicant.profile.resume ? (
                <Link
                  className="text-blue-600"
                  to={applicant.applicant.profile.resume}
                  target="_blank"
                >
                  {applicant.applicant.profile.resumeOriginalName}
                </Link>
              ) : (
                "NA"
              )}
            </TableCell>
            <TableCell>{applicant.applicant.createdAt}</TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger>
                  <MoreHorizontal className="cursor-pointer" />
                </PopoverTrigger>
                <PopoverContent className="w-fit p-0">
                  {shortListingStatus.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => statusHandler(option.status, applicant._id)}
                      className="flex cursor-pointer gap-2 p-2 items-center hover:bg-gray-900 hover:text-white hover:rounded-sm transition-all duration-300"
                    >
                      {loading.id === applicant._id && loading.status === option.status ? (
                        <div className="flex items-center gap-3">
                          <span className="animate-pulse">{option.apiLoaderText}</span>
                          <Loader className="animate-spin" />
                        </div>
                      ) : (
                        <>
                          <p>{option.status}</p>
                          <span>{option.icon}</span>
                        </>
                      )}
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        ))}

        {applicantsData.length <= 0 && (
          <TableRow className="text-center">
            <TableCell colSpan={6} className="my-10">
              <div className="my-2">
                <span className="font-medium text-xl">No Applicants Found</span>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TotalApplicantsTable;
