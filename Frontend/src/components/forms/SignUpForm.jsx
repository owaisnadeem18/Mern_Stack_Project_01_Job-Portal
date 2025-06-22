import { Button } from "@/components/ui/button";
import InputGroup from "./InputGroup";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FileHandler, HandleSubmit, HandleValueChange } from "./handlers/FormHandlers";

const SignUpForm = () => {

  // Now , let's create the state to handle "form Inputs"

  const [Inputs, SetInputs] = useState({
    FullName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    Role: "",
    File: ""
  });

  return (
    <div className="rounded-xl w-full max-w-lg mx-auto mt-10 p-6 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
      <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
        SignUp
      </h2>

      <form onSubmit={(e) => HandleSubmit(e , Inputs)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup
          label="Full Name"
          type="text"
          name="FullName"
          placeholder="Enter your full name"
          value={Inputs.FullName}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />
        <InputGroup
          label="Email"
          type="email"
          name="Email"
          placeholder="Enter your email"
          value={Inputs.Email}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />

        <InputGroup
          label="Phone Number"
          type="tel"
          name="PhoneNumber"
          placeholder="Enter your phone number"
          value={Inputs.PhoneNumber}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />
        <InputGroup
          label="Password"
          type="password"
          name="Password"
          placeholder="Enter your password"
          value={Inputs.Password}
          onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
        />

        <div className="flex gap-1 flex-col">
          <Label className={"px-1.5 mb-1"}>Profile</Label>
          <Input type={"file"} accept="image/*" className={"cursor-pointer"} onChange={(e) => FileHandler(e, Inputs , SetInputs ,  Inputs.File ) } />
        </div>

        <RadioGroup defaultValue="option-one ">
          <div className="flex gap-5 items-center">
            <div className="flex items-center cursor-pointer space-x-1">
              <Input
                className="w-3 h-3 accent-cyan-800 hover:accent-cyan-800 cursor-pointer"
                name="Role"
                value={"Student"}
                type={"radio"}
                checked={Inputs.Role === "Student"}
                id="student"
                onChange={(e) => HandleValueChange(e, Inputs, SetInputs)}
              />
              <Label htmlFor="student" className={"cursor-pointer"}>
                Student
              </Label>
            </div>
            <div className="flex items-center cursor-pointer space-x-1">
              <Input
                name="Role"
                type={"radio"}
                checked = {Inputs.Role === "Recruiter"}
                value="Recruiter"
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
          <Button type="submit"  className="w-full max-w-[8rem] cursor-pointer">
            Create Account
          </Button>
        </div>
      </form>

      <div className="text-sm mt-4 md:mt-2">
        Already have an Account ? {}
        <Link to={"/login"} className="text-blue-600 hover:underline">
          login
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
