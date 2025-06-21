import { Button } from "@/components/ui/button";
import InputGroup from "./InputGroup";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const SignUpForm = () => {
  return (
    <div className="rounded-xl w-full max-w-4xl mx-auto mt-10 p-6 border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
      <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
        SignUp
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputGroup
          label="Full Name"
          type="text"
          name="fullname"
          placeholder="Enter your full name"
        />
        <InputGroup
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />

        <InputGroup
          label="Phone Number"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
        />
        <InputGroup
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <InputGroup
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter your password"
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

        <div className="md:col-span-2 flex justify-center mt-4">
          <Button type="submit" className="w-full max-w-[8rem] cursor-pointer">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
