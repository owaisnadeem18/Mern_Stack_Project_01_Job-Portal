import React from 'react'
import Navbar from '@/components/ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosuel from './CategoryCarosuel'
import LatestJobs from './LatestJobs'
import Footer from '@/components/ui/shared/Footer'

const Home = () => {
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
