import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarItems } from "./utils/navbarItems";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [user, SetUser] = useState(false);
  return (
    <div className="items-center justify-between flex py-1 space-y-4 flex-col md:flex md:flex-row md:max-w-[100%] bg-cyan-950 min-h-[8vh] md:py-2 px-6">
      {/* 1st side of the navbar (logo)  */}

      <div className="logo text-2xl font-bold flex justify-center items-center mb-1 mt-1 md: m-0">
        <span className="text-white">Talent</span>
        <span
          className="text-amber-200
        "
        >
          Stack
        </span>
      </div>

      {/* 2nd side of the navbar (menu items) and (avatar) */}
      <div className="menu-items flex md:gap-6 gap-4 my-4 md:m-0">
        
        <ul className="items-center justify-between flex text-white gap-4 md:gap-5">
  {navbarItems("Home", "Jobs", "Browse").map((item, indx) => (
    <li key={indx} className="relative group font-semibold font-sans">
      
      <NavLink
        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        className={({ isActive }) => 
          `transition duration-300 ${isActive ? "text-white" : "text-white"}`
        }
      >
        {item}
      </NavLink>

      {/* underline span with hover + active support */}
      <NavLink
        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
        className={({ isActive }) =>
          `absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 
          ${isActive ? "w-3/4" : "w-0"} group-hover:w-3/4`
        }
      >
        <span className="sr-only">{item}</span> {/* for semantics, not visible */}
      </NavLink>

    </li>
  ))}
</ul>


        {/* Logic For Avatar */}

        {!user ? (
          <div className="flex gap-2 items-center">
            <Link to={"/login"}>
              <Button
                className={
                  "cursor-pointer text-sm bg-cyan-800 hover:bg-cyan-900"
                }
              >
                Login
              </Button>
            </Link>

            <Link to={"/signup"}>
              <Button
                className={
                  "cursor-pointer text-sm bg-purple-600 hover:bg-purple-800 "
                }
              >
                Signup
              </Button>
            </Link>
          </div>
        ) : (
          <Popover>
            <PopoverTrigger asChild>
              <Avatar>
                <AvatarImage
                  className={"cursor-pointer"}
                  src="https://github.com/shadcn.png"
                />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent
              className={
                "w-[250px] p-4 shadow-md rounded-xl border-none space-y-2"
              }
            >
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div className="flex flex-col px-4">
                  <h6>Owais Nadeem</h6>
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center">
                <div className="flex items-center">
                  <User2 />
                  <Button
                    variant={"link"}
                    className={"mx-2 p-0 cursor-pointer"}
                  >
                    View Profile
                  </Button>
                </div>

                <div className="flex items-center">
                  <LogOut />
                  <Button
                    variant={"link"}
                    className={"mx-2 p-0 cursor-pointer hover:text-red-500"}
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default Navbar;
