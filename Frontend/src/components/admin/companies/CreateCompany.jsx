import React, { useState } from 'react'
import Navbar from '@/components/ui/shared/Navbar'
import Footer from '@/components/ui/shared/Footer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { registerCompanyHandler } from '@/components/ui/shared/utils/registerCompanyHandler'
import { useDispatch } from 'react-redux'

const CreateCompany = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [companyName , setCompanyName] = useState("")

  return (
    <div>
      <Navbar/>
      <div className='max-w-[60%] pt-15 mx-auto' style={{minHeight: "calc(100vh - 69px)"}}  >
        <div className='mb-4 flex gap-1 flex-col ' >
          <h1 className='font-bold text-2xl' >
            Your Company Name
          </h1>
          <p className='text-gray-500' >
             Add a new company to showcase your business and start posting jobs for potential candidates.
          </p>

          
        </div>

        <Input
          className="w-1/2 px-3 py-3 border border-gray-300 rounded-sm shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    placeholder-gray-400 transition-all duration-200"
          placeholder="Add a new company"
          value = {companyName}
          onChange = {(e) => setCompanyName(e.target.value) } 
        />

        {/* buttons */}

        <div className='my-5 flex gap-2' >
          <Button className={"cursor-pointer"} variant={"outline"} onClick={() => navigate("/admin/companies")} > Cancel </Button>
          <Button className={"cursor-pointer"} onClick = { () => registerCompanyHandler(companyName , navigate , dispatch)} > Continue </Button>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default CreateCompany
