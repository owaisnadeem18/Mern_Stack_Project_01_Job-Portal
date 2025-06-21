import React from "react";
import { Link } from "react-router-dom";
import { navbarItems } from "./utils/navbarItems";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@/components/ui/popover";
import { Avatar , AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [user , SetUser] = useState(false)
  return (
    <div className="Navbar items-center justify-between flex max-w-[100%] bg-cyan-950 min-h-[8vh] py-1 px-6">
      {/* 1st side of the navbar (logo)  */}

      <div className="logo text-2xl font-bold">
        <span className="text-white">Talent</span>
        <span
          className="text-amber-200
        "
        >
          Stack
        </span>
      </div>

      {/* 2nd side of the navbar (menu items) and (avatar) */}
      <div className="menu-items flex gap-6">
        <ul className="items-center justify-between flex text-white gap-5">
          {navbarItems("Home", "Jobs", "Browse").map((item, indx) => (
            <li key={indx} className="relative group font-semibold font-sans">
              <Link to={item == "Home" ? "/" : `${item.toLowerCase()}`}>
                {item}
              </Link>

              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-3/4"></span>
            </li>
          ))}
        </ul>

        {/* Logic For Avatar */}

        {

          !user ? <div className="flex gap-2 items-center" >
              <Button className={"cursor-pointer bg-cyan-800 hover:bg-cyan-900"}>
                Login 
              </Button>
              <Button  className={"cursor-pointer bg-purple-600 hover:bg-purple-800 "}>
                Signup
              </Button>
          </div>
          :
          
        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage className={"cursor-pointer"} src="https://github.com/shadcn.png" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className={"w-[250px] p-4 shadow-md rounded-xl border-none space-y-2"} >
            <div className="flex items-center" >

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className="flex flex-col px-4">
              <h6>
                Owais Nadeem
              </h6>
              <p className="text-sm text-muted-foreground" >Lorem ipsum dolor sit.</p>
            </div>
            </div>

            <div className="flex flex-col items-start justify-center" >
              <div className="flex items-center" >
                <User2/>
                <Button variant={"link"} className={"mx-2 p-0 cursor-pointer"} >
                  View Profile
                </Button>
              </div>
              
              <div className="flex items-center" >
                <LogOut/>
                <Button variant={"link"} className={"mx-2 p-0 cursor-pointer hover:text-red-500"}>
                  Logout
                </Button>
              </div>
            </div>

          </PopoverContent>
        </Popover> 

        }

      </div>
    </div>
  );
};

export default Navbar;
