import { Badge } from "@/components/ui/badge";
import { jobsData } from "@/components/ui/shared/utils/JobsData";
import React from "react";

const LatestJobsCards = () => {
  return (
    <>
      {jobsData.map((job, index) => (
        <div
          key={index}
          className=" bg-blue-950 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] rounded-xl px-5 py-6 m-4 transition hover:scale-[1.04] duration-300"
        >
          <h3 className="text-xl font-bold text-white">{job.position}</h3>
          <p className="text-gray-300 font-semibold mt-1">{job.company}</p>
          <p className="text-sm text-gray-400 mt-1">{job.location}</p>
          
          <p className="text-sm text-gray-300 mt-1">{job.jobDescription.substring(0,120)}...</p>

          <div className="mt-3 flex flex-wrap gap-3">
            <Badge variant={"ghost"} className= "text-white" >
                {job.openings}
            </Badge>
            <Badge variant={"ghost"} className= " text-yellow-300" >
                {job.salary}
            </Badge>
            <Badge variant={"ghost"} className= " text-red-600" >
                {job.type}
            </Badge>
          </div>

          <button className="mt-4 w-full bg-purple-700 hover:bg-purple-800 cursor-pointer text-white font-medium py-2 px-4 rounded-lg">
            Apply Now
          </button>
        </div>
      ))}
    </>
  );
};

export default LatestJobsCards;
