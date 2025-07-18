import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoaderCircle } from "lucide-react";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/features/auth/authSlice";
import { toast } from "sonner";
import axios from "axios";

const EditProfileDialog = ({ open, setOpen }) => {

const [Loading , setLoading] = useState(false)

const dispatch = useDispatch()

const {user} = useSelector(store => store.auth)

const [input , setInput] = useState({
  fullName: user?.fullName ,
  email: user?.email,
  phoneNumber: user?.phoneNumber,
  bio: user?.profile?.bio,
  skills: user?.profile?.skills?.map(item => item) ,
  file: user?.profile?.resume  
})

  const handleChange = (e) => {
    setInput({...input , [e.target.name] : e.target.value})
  } 

  const handleFileChange  = (e) => {
    const file = e.target?.files[0]
    setInput({ ...input , [e.target.name]:file })
  }

  const handleSubmit = async (e) => {  
    e.preventDefault();

    // handle form logic here
    const formData = new FormData()

    formData.append("fullName" , input.fullName)
    formData.append("email" , input.email)
    formData.append("phoneNumber" , input.phoneNumber)
    formData.append("bio" , input.bio)
    formData.append("skills" , input.skills)

    if (input.file) {
      formData.append("file" , input.file)
    }

    console.log(input.file)

    try {
      setLoading(true)
      const res = await axios.post(`${USER_API_END_POINT}/profile/update` , formData , {
        withCredentials: true
      })

      if (res.data.success) {
        dispatch(setUser(res.data.LoginUser))
        toast.success(res.data.message)
      }      

      console.log(input)

    }
    
    catch (err) {
      console.log(`Error Fetching API is => ${err}`)
      toast.error(err.response.data.message)
    }

    finally {
      setLoading(false)
    }

    setOpen(false)

  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:max-w-md"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullName" className="col-span-1">
              Full Name 
            </Label>
            <Input
              onChange={handleChange}
              value = {input.fullName}
              type={"text"}
              id="fullName"
              name="fullName"
              className="col-span-3"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="col-span-1">
              Email
            </Label>
            <Input
              value={input.email}
              id="email"
              onChange={handleChange}
              type="email"
              name="email"
              className="col-span-3"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phoneNumber" className="col-span-1">
              Phone Number
            </Label>
            <Input
              value={input.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
              type={"number"}
              id="phoneNumber"
              className="col-span-3"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="col-span-1">
              Bio
            </Label>
            <Input
              name="bio"
              value={input.bio}
              type={"text"}
              id="bio"
              onChange={handleChange}
              className="col-span-3"
              placeholder="Enter your bio"
            />
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="skills" className="col-span-1">
              Skills
            </Label>
            <Input type={"text"} id="skills" value={input.skills} onChange={handleChange} name="skills" className="col-span-3" placeholder="skills" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file" className="col-span-1">
              Resume
            </Label>
            <Input onChange={handleFileChange} type={"file"} name="file" accept = "application/pdf" className="col-span-3" />
          </div>

          <DialogFooter className="pt-4">
 
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    disabled = {Loading}
                    >
                    Cancel
                  </Button>

                   {Loading ? (
                  <Button className="flex items-center gap-2">
                    <LoaderCircle  className="w-4 h-4 animate-spin" />
                    <span>Loading...</span>
                  </Button>
                  ) : (
                  <Button type="submit">Save changes</Button>
                  )}
            
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
