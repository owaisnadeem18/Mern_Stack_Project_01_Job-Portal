import { setLoading, setUser } from "@/features/auth/authSlice"
import { USER_API_END_POINT } from "@/utils/constant"
import axios from "axios"
import { toast } from "sonner"

export const HandleSubmitLogin = async (e , LoginValues , navigate , dispatch) => {
    e.preventDefault()

    // to create a form data of the values the user will enter
    let loginFormData = new FormData()

    loginFormData.append("email" , LoginValues.email)
    loginFormData.append("password" , LoginValues.password)
    loginFormData.append("role" , LoginValues.role)

    try {
        dispatch(setLoading(true))
        const res = await axios.post(`${USER_API_END_POINT}/login` , loginFormData , {
            headers: {
                "Content-Type" : "application/json"
            },
            withCredentials: true
        })

        console.log(res.data.LoginUser)

        if (res.data.success) {
            dispatch(setUser(res.data.LoginUser))
            navigate("/")
            toast.success(res.data.message)
        }
 
    }

    catch(err) {
        toast.error(err.response.data.message)
        console.log(err)
    }

    finally {                                                                                          
        dispatch(setLoading(false))
    }

}

                                                    