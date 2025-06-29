import React, { useState } from 'react'
import InputGroup from './InputGroup'
import { HandleValueChange } from './handlers/FormHandlers'
import { RadioGroup } from '../ui/radio-group'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { HandleSubmitLogin } from './handlers/LoginHandlers'

const SignInForm = () => {

    const [LoginValues, SetLoginValues] = useState({
        email: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate()

  return (
          <div className="rounded-xl w-full max-w-sm mx-auto mt-10 p-6 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
          Login
        </h2>

        <form onSubmit={(e) => HandleSubmitLogin(e , LoginValues , navigate) } className="flex flex-col gap-6">
          <InputGroup
            label="Email"
            type="email"
            name="email"
            value={LoginValues.Email}
            placeholder="Enter your email"
            onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
          />

          <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={LoginValues.password}
            onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
          />

          <RadioGroup defaultValue="option-one ">
            <div className="flex gap-5 items-center">
              <div className="flex items-center cursor-pointer space-x-1">
                <Input
                  className="w-4 h-4 accent-cyan-800 hover:accent-cyan-800 cursor-pointer"
                  name="role"
                  value= "student"
                  type={"radio"}
                  checked = {LoginValues.role == "student"}
                  id="student"
                  onChange={(e) => HandleValueChange(e , LoginValues , SetLoginValues)}
                />
                <Label htmlFor="student" className={"cursor-pointer"}>
                  Student
                </Label>
              </div>
              <div className="flex items-center cursor-pointer space-x-1">
                <Input
                  name="role"
                  value= "recruiter"
                  type={"radio"}
                  id="recruiter"
                  className="w-4 h-4 accent-cyan-800 hover:accent-cyan-800  cursor-pointer space-x-4"
                  checked={LoginValues.role == "recruiter"}
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
              className="w-full cursor-pointer"
            >
              login
            </Button>
          </div>
        </form>

        <div className="text-sm mt-4 md:mt-3">
          Don't have an Account ? {}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            signup
          </Link>
        </div>
      </div>
  )
}

export default SignInForm
