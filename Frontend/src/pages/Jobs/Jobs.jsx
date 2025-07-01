import Navbar from '@/components/ui/shared/Navbar'
import React from 'react'
import FilterCard from './FilterCard'
import Job from './Job'

const Jobs = () => {
  let randomJobs = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <aside className="w-full md:w-1/4">
            <FilterCard />
          </aside>

          {/* Jobs Grid */}
          <section className="w-full md:w-3/4">
            <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {randomJobs.map((item, indx) => (
                <Job key={indx}  />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Jobs
