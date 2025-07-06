import React, { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Pen, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AppliedJobsTable from "../Jobs/AppliedJobsTable";
import EditProfileDialog from "./EditProfileDialog";
import { useSelector } from "react-redux";

const skillsArray = ['html  ' , "Css" , "JavaScript" , "Vue.js" , "MongoDB" , "Node.js" ]
const resume = true

const ProfileDetails = () => {
  
  const {user} = useSelector(store=> store.auth)

  const [open , setOpen] = useState(false)

  return (
    <div
      style={{ minHeight: "calc(100vh - 56px)" }}
      className="max-w-9xl bg-gradient-to-br from-gray-500 to-gray-800 py-4 px-7"
    >

      <h2 className="text-white max-w-5xl mx-auto text-xl sm:text-2xl font-bold underline">Profile</h2>
      <div className="my-4 rounded-xl max-w-5xl mx-auto border bg-gradient-to-br from-gray-500 to-gray-600 px-3 py-2 sm:px-7 sm:py-5">
        <div className=" flex items-center gap-5 justify-between" >
          <div className="flex items-center text-white gap-3 sm:gap-5">
            <Avatar className={"my-4 h-12 w-12 md:h-24 md:w-24"}>
              <AvatarImage src={"https://github.com/shadcn.png"} />
            </Avatar>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Owais Nadeem</h2>
              <p className="text-[14px] md:text-sm text-gray-200" > Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div>
            <Button onClick={() => setOpen(true)} variant={"outline"} className={"w-7 h-7 sm:w-[unset] sm:h-[unset]"} >
              {" "}
              <Pen className="p-[1px] sm:p-[unset]" />{" "}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4 sm:mt-2" >
            <div className="flex items-center gap-2" >

            <Mail className="text-white" />
            <p className=" font-medium text-sm text-gray-200" >
                owaisnadeem@gmail.com
            </p>
            </div>
            <div className="flex items-center gap-2" >

            <PhoneCall className="text-white" />
            <p className="text-gray-200 font-medium text-sm" >
                03348889907
            </p>
            </div>
        </div>

        <div className="my-4" >
            <h3 className="text-white text-xl my-2 underline w-fit rounded-sm font-medium" >
                <Badge variant={"outline"} className={"text-gray-700 bg-white font-bold"} > Skills </Badge>
            </h3>

            { skillsArray.length !== 0 ? skillsArray.map((item , idx) => <Badge variant={"outline"} className={"text-gray-200 rounded-xl border border-gray-400 mr-1"} key={idx}> {item} </Badge> ) : <p className="font-bold text-gray-200 text-sm" > N/A </p> }

        </div>

        <div className="" >
            <h3 className="text-white text-xl underline w-fit rounded-sm font-medium" >
                <Badge variant={"outline"} className={"text-gray-700 bg-white font-bold"} > Resume </Badge>
            </h3>

            { resume ? <Button  variant={"link"} className={"p-0"} > <Link target="_blank" to={"https://owaisnadeem18.github.io/owais-nadeem-portfolio-web/"} variant={"outline"} className={" rounded-xl text-sm text-gray-200" }> Visit My Portfolio </Link></Button> : <p className="font-bold text-gray-200 mt-1 text-sm" > N/A </p> } 

        </div>


      </div>
        {/* Div For Applied Jobs */}

        <div className=" max-w-5xl mx-auto"  >

            <h3 className="text-lg font-semibold text-white underline" >
                Applied Jobs are 
            </h3>

            {/* Apploied Jobs Table will be there  */}
            <AppliedJobsTable/>            


        </div>
        
        {/* Component to Open dialog to edit the profile */}
        <EditProfileDialog open = {open}  setOpen = {setOpen} />

    </div>
  );
};

export default ProfileDetails;
