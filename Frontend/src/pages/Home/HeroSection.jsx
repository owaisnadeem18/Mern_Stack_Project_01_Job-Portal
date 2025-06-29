import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-gray-500 to-gray-800 py-20 px-6 md:px-8"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            From <span className="text-blue-300 font-bold">Searching</span> to{" "}
            <span className="text-blue-300 font-bold">Hiring</span>
          </h1>
          <p className="mt-4 text-blue-100 text-lg max-w-lg mx-auto md:mx-0">
            Kickstart your career journey today. Explore jobs, apply instantly,
            and move closer to your first salary.
          </p>
          <div className="mt-6 flex justify-center md:justify-start w-full max-w-md">
            <div className="flex w-full ">
              <input
                type="text"
                placeholder="Find your dream jobs ..."
                className="flex-grow px-4 py-0 bg-transparent text-white border-[0.0125px] border-gray-500 border-r-0 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-300 placeholder:text-sm"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-3 py-4 flex items-center justify-center rounded-r-full">
                <Search className="" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center ">
          <img
            src="https://cdn-icons-png.freepik.com/512/9174/9174858.png"
            alt="Job search"
            className="w-[320px] h-[320px] object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
