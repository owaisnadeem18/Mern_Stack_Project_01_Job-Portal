import { Button } from "@/components/ui/button";
import InputGroup from "../forms/InputGroup";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import Navbar from "../ui/shared/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="rounded-xl w-full max-w-sm mx-auto mt-10 p-6 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
          Login
        </h2>

        <form className="flex flex-col gap-6">
          <InputGroup
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />

          <InputGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <RadioGroup defaultValue="option-one ">
            <div className="flex gap-5 items-center">
              <div className="flex items-center cursor-pointer space-x-1">
                <Input
                  className="w-4 h-4 accent-cyan-800 hover:accent-cyan-800 cursor-pointer"
                  value="student"
                  name="role"
                  type={"radio"}
                  id="student"
                />
                <Label htmlFor="student" className={"cursor-pointer"}>
                  Student
                </Label>
              </div>
              <div className="flex items-center cursor-pointer space-x-1">
                <Input
                  value="recruiter"
                  name="role"
                  type={"radio"}
                  id="recruiter"
                  className="w-4 h-4 accent-cyan-800 hover:accent-cyan-800 cursor-pointer space-x-4"
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
    </>
  );
};

export default SignIn;
