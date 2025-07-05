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
import { useSelector } from "react-redux";
import { LoaderCircle } from "lucide-react";

const EditProfileDialog = ({ open, setOpen }) => {

  // first we have to use the loaders there: 

  const loading = useSelector(store => store.loading)

  const {user} = useSelector(store=> store.auth)

  const [input , setInput] = useState({
    fullName: user?.fullName ,
    phoneNumber: user?.phoneNumber,
    email: user?.email,
    bio: user?.bio,
    skills: user?.profile.skills?.map(skill => skill),
    file: user?.profile?.resume
  })

  const handleChange = (e) => {
    setInput({...input , [e.target.name] : e.target.value})
  } 

  const handleFileChange  = (e) => {
    const files = e.target?.files[0]
    setInput({ ...input , [e.target.name]:e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle form logic here
    setOpen(false)

    const form = new FormData()

    form.append("fullName" , input.fullName)
    form.append("email" , input.email)
    form.append("phoneNumber" , input.phoneNumber)
    form.append("bio" , input.bio)
    form.append("skills" , input.skills)

    if (input.file) {
      form.append("file" , input.file)
    }

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
              Name
            </Label>
            <Input
              onChange={handleChange}
              value = {input.fullName}
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
              Phone
            </Label>
            <Input
              value={input.phoneNumber}
              onChange={handleChange}
              name="phoneNumber"
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
              id="bio"
              className="col-span-3"
              placeholder="Enter your bio"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="skills" className="col-span-1">
              Skills
            </Label>
            <Input id="skills" value={input.skills} name="skills" className="col-span-3" placeholder="skills" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file" className="col-span-1">
              Resume
            </Label>
            <Input onChange={handleFileChange} type={"file"} name="file" accept = "application/pdf" className="col-span-3" />
          </div>

          <DialogFooter className="pt-4">

            {
              loading ? <Button disable className= "w-full" > 
                  <LoaderCircle className="w-2 h-2 animate-spin" /> loading ...
                 </Button>
                 : 
                 <>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    >
                    Cancel
                  </Button>
                  <Button type="submit">Save changes</Button>
                </>
            }
            
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
