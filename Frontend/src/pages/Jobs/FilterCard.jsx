import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const FilterCard = () => {
  // Now, filter jobs based on the categories of industry, location and salary package

  const filteredData = [
    {
      jobFilter: "Location",
      filterArray: ["Karachi", "Lahore", "Islamabad", "Faisalabad"],
    },
    {
      jobFilter: "Industry",
      filterArray: [
        "Frontend Developer",
        "Backend Developer",
        "Devops",
        "AI Engineer",
        "Mobile App Developer",
        "Graphic Designer",
        "Wordpress",
      ],
    },
    {
      jobFilter: "Salary",
      filterArray: [50000, 70000, 100000, 150000, 200000],
    },
  ];

  return (
    <div className="">
      <h2 className="text-white font-semibold ">Filter Jobs</h2>
      <hr className="my-3" />

      <RadioGroup>
        {
          filteredData.map((data,idx) => (
              <div className="flex flex-wrap items-center gap-2 md:flex-col md:items-start md:gap-4" key={idx} >
                <h1 className="text-white underline font-medium " >
                  {data.jobFilter}
                </h1>

                {
                
                
                data.filterArray.map((item , idx) => (
                  <div className="flex gap-3 items-center text-white my-4 md:my-0"> 
                    <RadioGroupItem className={"text-white"} id={item} key={idx} value = {item} />
                    <Label className={"leading-5"} htmlFor = {item}> {item} </Label>
                  </div>
                ))
                
                
                }

              </div>
          ))
        }
      </RadioGroup>

    </div>
  );
};

export default FilterCard;
