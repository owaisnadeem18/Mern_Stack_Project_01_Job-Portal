import { setSingleCompany } from '@/features/companies/companySlice'
import { APPLICATION_API_END_POINT, COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const useGetCompanybyId = (companyID) => {

    const dispatch = useDispatch()

    useEffect(() => {

        const fetchCompanyById = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getCompanies/${companyID}`)
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company))
                    toast.success("Hit API of GET Company By Id")
                }
            }
        
            catch (err) {
                console.log(err)
                toast.error(err.response.data.message)
            }
        }

        fetchCompanyById()
    
    } , [companyID , dispatch] )

}

export default useGetCompanybyId
