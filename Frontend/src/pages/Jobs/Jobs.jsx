import Navbar from "@/components/ui/shared/Navbar";
import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Footer from "@/components/ui/shared/Footer";
import { useSelector } from "react-redux";

const Jobs = () => {

  
  const {allJobs , searchQuery} = useSelector(store=> store?.job)
  
  console.log(allJobs)

  const [filteredJobs , setFilteredJobs] = useState(allJobs)

useEffect(() => {
  if (searchQuery) {
    const filteredResults = allJobs.filter((job) => {

      if (!isNaN(searchQuery)) {
        return job.salary === Number(searchQuery);
      }

      // Otherwise string based filter
      const query = searchQuery.toLowerCase();
      return (
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.industry?.toLowerCase().includes(query) // optional if industry field hai
      );
    });

    setFilteredJobs(filteredResults);
  } else {
    setFilteredJobs(allJobs);
  }
}, [allJobs, searchQuery]);

  return (
    <>
      <Navbar />

      <div
        className="bg-gradient-to-br from-gray-500 to-gray-800"
        style={{ minHeight: "calc(100vh - 69px)" }}
      >
        <div className="md:max-w-9xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filter Sidebar */}
            <aside className="w-full md:w-[20%] xl:w-[13%] lg:[w-18%]">
              <FilterCard />
            </aside>

            {/* Jobs Grid */}
            <section className="w-full md:w-[78%]">
              <h2 className="text-2xl font-bold mb-3 text-white">
                Available Jobs: ({filteredJobs.length})
              </h2>
                {allJobs.length == 0 ? (
                  <div className="font-semibold min-h-auto flex w-full justify-center items-center text-white md:min-h-[75vh]">
                    <h1 className="text-xl md:text-2xl underline" > No Relevant Jobs Found!
                  </h1>
                  </div>
              ) : 
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {
                  filteredJobs.map((job) => <Job key={job._id} job={job} />)
                }
              </div>
              }
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
