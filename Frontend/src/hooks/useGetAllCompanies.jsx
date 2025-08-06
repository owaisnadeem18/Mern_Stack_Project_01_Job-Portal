import { setCompanies } from '@/features/companies/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompanies = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {

        const getAllCompanies = async () => {

            const res = await axios.get(`${COMPANY_API_END_POINT}/getCompanies` , {withCredentials: true})

            console.log("Get All Companies Response: ", res.data)
            
            if (res.data.success) {
                dispatch(setCompanies(res.data.companies))
            }
        
        }
    
        getAllCompanies()

    } , [])


}

export default useGetAllCompanies
