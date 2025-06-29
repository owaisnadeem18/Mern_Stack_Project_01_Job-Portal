import { Button } from "@/components/ui/button";
import InputGroup from "./InputGroup";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FileHandler, HandleValueChange } from "./handlers/FormHandlers";
import { HandleSubmitSignUp } from "./handlers/SignUpHandlers";

const SignUpForm = () => {

  // Now , let's create the state to handle "form Inputs"

  const [Inputs, SetInputs] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });

  const navigate = useNavigate()

  return (
    <div className="rounded-xl w-full max-w-lg mx-auto mt-10 p-6 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
      <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
        SignUp
      </h2>

      <form onSubmit={(e) => HandleSubmitSignUp(e , Inputs , navigate)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={Inputs.fullName}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />
        <InputGroup
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={Inputs.email}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />

        <InputGroup
          label="Phone Number"
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={Inputs.phoneNumber}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />
        <InputGroup
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={Inputs.password}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />

        <div className="flex gap-1 flex-col">
          <Label className={"px-1.5 mb-1"}>Profile</Label>
          <Input type={"file"} accept="image/*" className={"cursor-pointer"} onChange={(e) => FileHandler(e, Inputs , SetInputs ,  Inputs.file) } />
        </div>

        <RadioGroup defaultValue="option-one ">
          <div className="flex gap-5 items-center">
            <div className="flex items-center cursor-pointer space-x-1">
              <Input
                className="w-3 h-3 accent-cyan-800 hover:accent-cyan-800 cursor-pointer"
                name="role"
                value={"student"}
                type={"radio"}
                checked={Inputs.role === "student"}
                id="student"
                onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
              />
              <Label htmlFor="student" className={"cursor-pointer"}>
                Student
              </Label>
            </div>
            <div className="flex items-center cursor-pointer space-x-1">
              <Input
                name="role"
                type={"radio"}
                checked = {Inputs.role === "recruiter"}
                value="recruiter"
                id="recruiter"
                className="w-3 h-3 accent-cyan-800 hover:accent-cyan-800 cursor-pointer space-x-4"
                onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
              />
              <Label htmlFor="recruiter" className={"cursor-pointer"}>
                Recruiter
              </Label>
            </div>
          </div>
        </RadioGroup>

        <div className="md:col-span-2 flex justify-center mt-4">
          <Button type="submit" className="w-full cursor-pointer">
            Create Account
          </Button>
        </div>
      </form>

      <div className="text-sm mt-4 md:mt-3">
        Already have an Account ? {}
        <Link to={"/login"} className="text-blue-600 hover:underline">
          login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
