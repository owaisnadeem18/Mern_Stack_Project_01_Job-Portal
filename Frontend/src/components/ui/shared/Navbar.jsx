import React from "react";
import { Link } from "react-router-dom";
import { navbarItems } from "./utils/navbarItems";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
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

      {/* 2nd side of the navbar (menu items) */}
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

        <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <h1 className="border-none">Owais Nadeem</h1>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
