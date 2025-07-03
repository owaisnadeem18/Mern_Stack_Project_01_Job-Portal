import Footer from '@/components/ui/shared/Footer'
import Navbar from '@/components/ui/shared/Navbar'
import React from 'react'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div style={{minHeight : "calc(100vh - 56px)"}} className='max-w-9xl bg-gradient-to-br from-gray-500 to-gray-800 py-4 px-7'>
        <h2 className='text-white' >
            Profile
        </h2>
    </div>
    <Footer/>
    </>
  )
}

export default Profile
