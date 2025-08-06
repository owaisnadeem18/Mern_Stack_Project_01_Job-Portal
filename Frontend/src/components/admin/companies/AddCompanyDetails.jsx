import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { ArrowLeft, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const AddCompanyDetails = () => {

  const [input, setInput] = useState({
    name: "",
    website: "",
    location: "",
    description: "",
    logo: null
  })

  const {singleCompany} = useSelector(store => store.company)

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const params = useParams()

  const handleValueChange = async (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    setInput({ ...input, logo: e.target.files[0] });
  }


  useEffect(() => {
    setInput({
      name: singleCompany?.name || "" ,
      website: singleCompany?.website || "" ,
      location: singleCompany?.location || "" ,
      description: singleCompany?.description || "" , 
      logo: singleCompany?.logo || null
    })
  } , [singleCompany])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true)


    // let work on form data 

    const formData = new FormData()

    formData.append("name", input.name)
    formData.append("description", input.description)
    formData.append("website", input.website)
    formData.append("location", input.location)

    if (input.logo) {
      formData.append("file", input.logo)
    }

    // call the update PUT API of companies: 

    try {
      const res = await axios.put(`${COMPANY_API_END_POINT}/updateCompany/${params.id}`, formData, {
        withCredentials: true
      })

      if (res?.data?.success) {
        toast.success(res.data.message)
        navigate("/admin/companies")

      }

    }


    catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message)
    }

    finally {
      setLoading(false)
    }

  }

  return (
    <div>
      <Navbar />
      <div className='max-w-[85%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] pt-15 mx-auto' style={{ minHeight: "calc(100vh - 82px" }} >

        <div className='flex items-center gap-3' >

          <Button variant={"outline"} >
            <div onClick={() => navigate("/admin/companies")} className='flex cursor-pointer items-center gap-1' >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </div>
          </Button>

          <h2 className='text-xl font-medium' >
            Company Details
          </h2>

        </div>

        {/* Company details items */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 py-6 bg-white shadow-sm rounded-lg"
        >
          {/* Company Name */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Company Name</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.name}
              name="name"
              placeholder="Enter Company Name"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Website */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Website</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.website}
              name="website"
              placeholder="Enter Company Website"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Company's Description</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.description}
              name="description"
              placeholder="Enter Company's Description"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <Label className="block mb-2 font-medium text-gray-800">Company's Location</Label>
            <Input
              onChange={handleValueChange}
              type="text"
              value={input.location}
              name="location"
              placeholder="Enter Company's Location"
              className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Logo */}
          <div className="md:w-fit md:col-span-2">
            <Label className="block mb-2 font-medium text-gray-800">Company's Logo</Label>
            <Input
              type="file"
              accept="image/*"
              name="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md text-sm bg-gray-50 cursor-pointer focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              className="w-full cursor-pointer font-medium text-white bg-black rounded-md hover:bg-gray-800 transition"
            >
              {loading ?   <span className="flex items-center justify-center gap-2">
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

export default AddCompanyDetails
