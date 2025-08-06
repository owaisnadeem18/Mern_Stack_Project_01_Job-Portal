import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import Footer from '../../ui/shared/Footer'
import Navbar from '../../ui/shared/Navbar'
import React from 'react'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useSelector } from 'react-redux'

const Companies = () => {

  useGetAllCompanies()    

  const {companies} = useSelector(state => state?.company);

  console.log("Companies: ", companies)

  const navigate = useNavigate()


  return (
<>
    <Navbar />
      <div className='max-w-[60%] pt-15 mx-auto' style={{ minHeight: "calc(100vh - 82px)" }} >

      <div className='flex items-center justify-between'>

        <Input
          className="w-fit px-3 py-2 border border-gray-300 rounded-sm shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          placeholder-gray-400 transition-all duration-200"
          placeholder="Filter by Company Name"
          />

        <Button className={"cursor-pointer"} onClick={() => navigate("/admin/companies/create-company")} >
          New Company
        </Button>
      
      </div>

      <CompaniesTable companies={companies} />

      </div>
    <Footer/>
</>
  )
}

export default Companies
