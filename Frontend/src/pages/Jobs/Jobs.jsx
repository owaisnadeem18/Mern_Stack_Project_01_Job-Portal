import Navbar from "@/components/ui/shared/Navbar";
import React from "react";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Footer from "@/components/ui/shared/Footer";

const Jobs = () => {
  let randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <Navbar />

      <div
        className="bg-gradient-to-br from-gray-500 to-gray-800"
        style={{ minHeight: "calc(100vh - 56px)" }}
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
                Available Jobs
              </h2>
              <div className="grid  gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                {randomJobs.length == 0 ? (
                  <div className="font-semibold text-white">
                    No Relevant Jobs Found
                  </div>
                ) : (
                  randomJobs.map((item, indx) => <Job key={indx} />)
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
