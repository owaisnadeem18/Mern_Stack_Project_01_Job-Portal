import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector(store => store?.auth)

  console.log("user role in protected route is => " , user?.role)
  
  const navigate = useNavigate()

  useEffect(() => {
    if (user === null || user.role != "recruiter") {
      navigate("/")
    }
  }, [user, navigate])  

  return <>{children}</>
}

export default ProtectedRoutes
