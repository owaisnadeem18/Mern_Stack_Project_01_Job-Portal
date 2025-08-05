import React from 'react'
import Navbar from '../ui/shared/Navbar'
import Footer from '../ui/shared/Footer'

const CreateCompany = () => {
  return (
    <div>
        <Navbar/>
      <div className='' style={{minHeight: "calc(100vh - 82px)"}}  >
        Create Company
      </div>
      <Footer/>
    </div>
  )
}

export default CreateCompany
