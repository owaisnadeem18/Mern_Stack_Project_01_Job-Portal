import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'

const AddJobDetails = () => {

  const [input , setInput] = useState({
    companyName: "" ,
    jobPosition: "" , 
    employmentType: "" ,
    date: "" , 
    salary: ""
  })

  const [loading , setLoading] = useState(false)

  const handleValueChange = () => {
    setInput({...input , [e.target.name] : e.target.value})
  }

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-[85%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] pt-15 mx-auto' style={{ minHeight: "calc(100vh - 69px" }} >

        <div className='flex items-center gap-3' >

          <Button className={"cursor-pointer"} onClick={() => navigate("/admin/companies")} variant={"outline"} >
            <div className='flex items-center gap-1' >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </div>
          </Button>

          <h2 className='text-xl font-medium' >
            Job Details
          </h2>

        </div>

        {/* Company details items */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6 m-2 shadow-sm rounded-lg"
        >
          {/* Company Name */}
          <div>

            {/* <TableHead className={"text-center font-bold "}>Company</TableHead>
            <TableHead className={"text-center font-bold "}>Job Position</TableHead>
            <TableHead className={"text-center font-bold "}>Employment Type</TableHead>
            <TableHead className={"text-center font-bold "}>Date</TableHead>
            <TableHead className={"text-center font-bold "}>Salary</TableHead>
            <TableHead className={"text-center font-bold "}>Actions</TableHead> */}

            <Label className="block mb-2 font-medium text-gray-800">Company</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.companyName}
              name="companyName"
              placeholder="Enter Company Name"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Job Position */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Position</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.jobPosition}
              name="jobPosition"
              placeholder="Enter Job Position"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Employment Type */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Employment Type</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.employmentType}
              name="employmentType"
              placeholder="Enter Employment Type"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Date</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.date}
              name="date"
              placeholder="Enter Date when job created"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Salary */}
          <div className="md:w-fit md:col-span-2">
            <Label className="block mb-2 font-medium text-gray-800">Salary</Label>
            <Input
              type="text"
              name="salary"
              placeholder= "Enter Salary"
              value={input.salary}
              onChange={handleValueChange}
              className="w-full border border-gray-300 rounded-md text-sm bg-gray-50 cursor-pointer focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-1 m-auto border w-full">
            <Button
              type="submit"
              className="w-full cursor-pointer m-auto font-medium text-white bg-black rounded-md hover:bg-gray-800 transition"
            >
              {loading ? <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Updating...
              </span> : "Update"}
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddJobDetails
