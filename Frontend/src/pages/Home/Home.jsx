import React from 'react'
import Navbar from '@/components/ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosuel from './CategoryCarosuel'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryCarosuel />
    </>
  )
}

export default Home
