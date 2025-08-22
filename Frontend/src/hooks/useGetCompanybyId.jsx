import { setSingleCompany } from '@/features/companies/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const useGetCompanybyId = (companyID) => {

    const dispatch = useDispatch()

    useEffect(() => {

        const fetchCompanyById = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/getCompanies/${companyID}` , {withCredentials: true})
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company))
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
