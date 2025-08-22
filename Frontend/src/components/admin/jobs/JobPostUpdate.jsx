import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import useUpdateAdminJobById from '@/hooks/useUpdateAdminJobById'
import { JOB_API_END_POINT } from '@/utils/constant'
import { ArrowLeft, Loader2 } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const JobPostUpdate = () => {

  const {updateAdminJobById , loading} = useUpdateAdminJobById() 

  const params = useParams()
  const jobId = params.id

    const [input, setInput] = useState({
    title: "",
    company: "" ,
    position: "",
    jobType: "",
    date: "",
    salary: "",
    location: "",
    experience: "",
  });

  const { allAdminJobs } = useSelector(store => store?.job)

  console.log(allAdminJobs)

  const navigate = useNavigate();

  const handleValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInput({
      title: allAdminJobs?.title || "" ,
    company: allAdminJobs?.company?.name || "" ,
    position: allAdminJobs?.position || "" ,
    jobType: allAdminJobs?.jobType || "",
    date: allAdminJobs?.createdAt?.split("T")[0] || "" ,
    salary: allAdminJobs?.salary || "",
    location: allAdminJobs?.location || "",
    experience: allAdminJobs?.experience || "",
  
    })
  } , [allAdminJobs] )

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append("title" , input.title)
    formData.append("company" , input.company)
    formData.append("position" , input.position)
    formData.append("jobType" , input.jobType)
    formData.append("salary" , input.salary)
    formData.append("location" , input.location)
    formData.append("experience" , input.experience)
    formData.append("date" , input.date)

    await updateAdminJobById(jobId , formData)

  };

  return (
    <>
      <Navbar/>
      <div
        className="max-w-[85%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] pt-10 mx-auto"
        style={{ minHeight: "calc(100vh - 69px)" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <Button
            className="cursor-pointer"
            onClick={() => navigate("/admin/jobs")}
            variant="outline"
          >
            <div className="flex items-center gap-1">
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </div>
          </Button>
          <h2 className="text-xl font-semibold">Job Details</h2>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6 my-6 border px-6 shadow-xl shadow-blue-950/30 rounded-2xl bg-white"
        >
          {/* Job Title */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Job Title
            </Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.title}
              name="title"
              placeholder="Enter Job Title"
            />
          </div>

          {/* Company Name */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Company
            </Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.company}
              name="company"
              placeholder="Enter Company Name"
            />
          </div>

          {/* Position */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Position
            </Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.position}
              name="position"
              placeholder="Enter Job Position"
            />
          </div>

          {/* Employment Type */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Employment Type
            </Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.jobType}
              name="jobType"
              placeholder="Full-time / Part-time / Remote"
            />
          </div>

          {/* Date */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Date</Label>
            <Input
              onChange={handleValueChange}
              type="date"
              value={input.date}
              name="date"
            />
          </div>

          {/* Salary */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Salary
            </Label>
            <Input
              type="text"
              name="salary"
              placeholder="Enter Salary"
              value={input.salary}
              onChange={handleValueChange}
            />
          </div>

          {/* Location */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Location
            </Label>
            <Input
              type="text"
              name="location"
              placeholder="Enter Job Location"
              value={input.location}
              onChange={handleValueChange}
            />
          </div>

          {/* Experience */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Experience
            </Label>
            <Input
              type="text"
              name="experience"
              placeholder="e.g. 2+ years"
              value={input.experience}
              onChange={handleValueChange}
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full font-medium text-white bg-black rounded-md hover:bg-gray-800 transition"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Updating...
                </span>
              ) : (
                "Update Job"
              )}
            </Button>
          </div>

        </form>
      </div>
      <Footer/>
    </>
  )
}

export default JobPostUpdate
