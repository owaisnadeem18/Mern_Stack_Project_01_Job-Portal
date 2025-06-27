import React, { useState } from 'react'
import InputGroup from './InputGroup'
import { HandleValueChange } from './handlers/FormHandlers'
import { RadioGroup } from '../ui/radio-group'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { HandleSubmitLogin } from './handlers/LoginHandlers'

const SignInForm = () => {

    const [LoginValues, SetLoginValues] = useState({
        email: "",
        password: "",
        role: "",
    });

  return (
          <div className="rounded-xl w-full max-w-sm mx-auto mt-10 p-6 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
          Login
        </h2>

        <form onSubmit={(e) => HandleSubmitLogin(e , LoginValues , SetLoginValues) } className="flex flex-col gap-6">
          <InputGroup
            label="Email"
            type="email"
            name="Email"
            value={LoginValues.Email}
            placeholder="Enter your email"
            onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
          />

          <InputGroup
            label="Password"
            type="password"
            name="Password"
            placeholder="Enter your password"
            value={LoginValues.Password}
            onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
          />

          <RadioGroup defaultValue="option-one ">
            <div className="flex gap-5 items-center">
              <div className="flex items-center cursor-pointer space-x-1">
                <Input
                  className="w-4 h-4 accent-cyan-800 hover:accent-cyan-800 cursor-pointer"
                  name="Role"
                  value= "Student"
                  type={"radio"}
                  checked = {LoginValues.Role == "Student"}
                  id="student"
                  onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
                />
                <Label htmlFor="student" className={"cursor-pointer"}>
                  Student
                </Label>
              </div>
              <div className="flex items-center cursor-pointer space-x-1">
                <Input
                  name="Role"
                  value= "Recruiter"
                  type={"radio"}
                  id="recruiter"
                  className="w-4 h-4 accent-cyan-800 hover:accent-cyan-800  cursor-pointer space-x-4"
                  checked={LoginValues.Role == "Recruiter"}
                  onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
                />
                <Label htmlFor="recruiter" className={"cursor-pointer"}>
                  Recruiter
                </Label>
              </div>
            </div>
          </RadioGroup>

          <div className="md:col-span-2 flex justify-center ">
            <Button
              type="submit"
              className="w-full max-w-[8rem] cursor-pointer"
            >
              login
            </Button>
          </div>
        </form>

        <div className="text-sm mt-4 md:mt-2">
          Don't have an Account ? {}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            signup
          </Link>
        </div>
      </div>
  )
}

export default SignInForm
