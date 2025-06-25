import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";

export const HandleValueChange = (e, InputValues, SetInputValues) => {
  SetInputValues({ ...InputValues, [e.target.name]: e.target.value });
};

export const FileHandler = (e, InputValues, SetInputValues) => {
  SetInputValues({ ...InputValues, File: e.target.files?.[0] });
};

export const HandleSubmit = async (e, InputValues) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("FullName", InputValues.fullName);
  formData.append("Email", InputValues.Email);
  formData.append("PhoneNumber", InputValues.PhoneNumber);
  formData.append("Password", InputValues.Password);
  formData.append("Role", InputValues.Role);
  if (InputValues.File) {
      formData.append("File" , InputValues.File)
  }

  try {
    const res = await axios.post(`${USER_API_END_POINT}/register` , formData , {
        headers: {
            "Content-Type": "multipart/form-data"
        }, 

        withCredentials: true 
    });


  } catch (error) {

    
    console.error("Registration failed:", error);
}
};
