import { setSingleCompany } from "@/features/companies/companySlice"
import { COMPANY_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { toast } from "sonner"

export const registerCompanyHandler = async (newCompanyName , navigate , dispatch ) => {

    try {
        const res = await axios.post(`${COMPANY_API_END_POINT}/registerCompany` , {
            CompanyName: newCompanyName
        },
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }
    )

    console.log(res.data)

        if (res.data.success) {

            toast.success(res.data.message)

            const companyId = res?.data?.company?._id 
            navigate(`/admin/companies/${companyId}`)
            dispatch(setSingleCompany(res?.data?.company))

        }

    } catch (err) {
        console.log(err)
        toast.error(err.response.data.message)
    }   
}