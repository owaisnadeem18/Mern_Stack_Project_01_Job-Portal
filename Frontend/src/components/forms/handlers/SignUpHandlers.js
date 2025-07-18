import { setLoading } from "@/features/auth/authSlice"
import { USER_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { toast } from "sonner"

export const HandleSubmitSignUp = async (e , SignUpValues , navigate , dispatch) => {
    e.preventDefault()  

    // Let's create a form data for all these values 
    let formData = new FormData()
    formData.append("fullName" , SignUpValues.fullName)
    formData.append("email" , SignUpValues.email)
    formData.append("phoneNumber" , SignUpValues.phoneNumber)
    formData.append("password" , SignUpValues.password)
    formData.append("role" , SignUpValues.role)
    
    if (SignUpValues.file) {
        formData.append("file" , SignUpValues.file)
    }

    try {
        dispatch(setLoading(true))
        const res = await axios.post(`${USER_API_END_POINT}/register` , formData , {
            headers: {
                "Content-Type" : "multipart/form-data" 
            },
            withCredentials: true,
        })

        if (res.data.success) {
            navigate("/login")
            toast.success(res.data.message)
        }

    }
    catch (err) {
        console.log(err)
        toast.error(err.response.data.message)
    }
    finally{
        dispatch(setLoading(false))
    }

}