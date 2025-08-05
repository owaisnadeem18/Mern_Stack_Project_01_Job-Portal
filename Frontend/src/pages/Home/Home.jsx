import React, { useEffect } from 'react'
import Navbar from '@/components/ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosuel from './CategoryCarosuel'
import LatestJobs from './LatestJobs'
import Footer from '@/components/ui/shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { store } from '@/redux/store'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  useGetAllJobs()

  const navigate = useNavigate()

  const {user} = useSelector(store => store.auth)

  useEffect(() => {

    if (user?.role == "recruiter") {
      navigate("/admin/companies")
    }

  } , [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className='bg-gradient-to-br from-gray-50 to-gray-400' >
        <CategoryCarosuel />
        <LatestJobs />
        <Footer/>
      </div>
    </>
  )
}

export default Home
