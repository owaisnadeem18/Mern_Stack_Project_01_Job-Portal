import { setUser } from "@/features/auth/authSlice"
import { USER_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { toast } from "sonner"

export const LogoutHanlder = async ({user , dispatch , navigate }) => {

    try {
        const res = await axios.get(`${USER_API_END_POINT}/logout` , {withCredentials: true})
        if (res.data.success) {
            navigate("/")
            dispatch(setUser(null))
            toast.success(res.data.message)
        }
    }
    
    catch(err) {
        console.log(err)
        toast.error(err.res.data.message)
    }

}