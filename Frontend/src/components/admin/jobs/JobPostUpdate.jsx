import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const JobPostUpdate = () => {

    const [input, setInput] = useState({
    title: "",
    position: "",
    jobType: "",
    date: "",
    salary: "",
    location: "",
    experience: "",
    requirements: "",
    companyId: "",
    description: "",
  });

  const { allAdminJobs } = useSelector(store => store?.job)

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleValueChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectJobChangeHandler = (value) => {
    const selectedJob = companies.find(
      (job) => job?.name.toLowerCase() === value
    );
    setInput({ ...input, jobId: selectedJob?._id || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/jobPost`, input, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message)
        navigate("/admin/jobs");
      
      }

      console.log(res)

    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message)
    } finally {
      setLoading(false);
    }
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

          {/* Requirements */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">
              Requirements
            </Label>
            <Input
              type="text"
              name="requirements"
              placeholder="Enter Key Requirements"
              value={input.requirements}
              onChange={handleValueChange}
            />
          </div>

          {/* Select Company */}
          <div className="md:col-span-2">
            {companies.length > 0 && (
            <>
            <Label className="block mb-2 font-medium text-gray-800">
              Select Company
            </Label>
            
              <Select onValueChange={selectJobChangeHandler}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem
                    key={company._id}
                    value={company.name.toLowerCase()}
                    >
                      {company.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              </>
            )}
          </div>

          {/* Description (Textarea - last field) */}
          <div className="md:col-span-2">
            <Label className="block mb-2 font-medium text-gray-800">
              Job Description
            </Label>
            <Textarea
              name="description"
              value={input.description}
              onChange={handleValueChange}
              placeholder="Write full job description here..."
              className="min-h-[120px] scroll-auto"
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
                  Posting...
                </span>
              ) : (
                "Post New Job"
              )}
            </Button>
          </div>

          {companies.length <= 0 && (
            <div className="md:col-span-2">
              <p className="text-red-500 text-xs text-center font-bold">
                *You must register at least one company before posting a job
              </p>
            </div>
          )}
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default JobPostUpdate
