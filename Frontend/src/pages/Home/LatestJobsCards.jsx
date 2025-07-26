import { Badge } from "@/components/ui/badge";
import { MapPinCheckIcon, MapPinIcon } from "lucide-react";
import React from "react";

const LatestJobsCards = ({ job }) => {

  return (
    <>
      <div className=" bg-blue-950 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] rounded-xl px-5 py-6 m-4 transition hover:scale-[1.04] duration-300">
        <h3 className="text-xl font-bold text-white">{job?.title} </h3>
        <p className="text-gray-300 font-semibold mt-1">{job?.company["name"]}</p>
        <p className="text-sm text-gray-400 mt-1 flex gap-1 items-center"> <MapPinIcon /> {job?.location}</p>

        <p className="text-sm leading-6 text-gray-300 mt-1">{job?.description} with experience of <Badge className={"ml-1"} variant={"ghost"} > {job?.experience} </Badge> </p>

        <div className="mt-3 flex flex-wrap gap-3">
          <Badge variant={"ghost"} className="text-white">
            Positions: <span className="text-yellow-200 font-bold" > {job?.position} </span>
          </Badge>
          <Badge variant={"ghost"} className=" text-yellow-300">
            {job?.salary?.toLocaleString('en-IN')} PKR / month
          </Badge>
          <Badge variant={"ghost"} className=" text-red-600">
            {job?.jobType}
          </Badge>
        </div>

        <div className="flex gap-3 mt-4 flex-wrap" >
            {job?.requirements.map((requirement , index) => <Badge variant={"ghost"} className=" text-black bg-white"> {requirement} </Badge>
            )}
          
        </div>

        <button className="mt-4 w-full bg-purple-700 hover:bg-purple-800 cursor-pointer text-white font-medium py-2 px-4 rounded-lg">
          Apply Now
        </button>
      </div>
    </>
  );
};

export default LatestJobsCards;
