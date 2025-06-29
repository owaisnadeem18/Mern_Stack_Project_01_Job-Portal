import React from 'react'
import Navbar from '@/components/ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosuel from './CategoryCarosuel'
import LatestJobs from './LatestJobs'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarosuel />
      <LatestJobs />
    </>
  )
}

export default Home
