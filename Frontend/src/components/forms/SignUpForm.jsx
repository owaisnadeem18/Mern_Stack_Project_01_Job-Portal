import { Button } from "@/components/ui/button";
import InputGroup from "./InputGroup";

const SignUpForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 shadow-lg rounded-xl">
      <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
        Sign Up
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
          label="Username"
          type="text"
          name="username"
          placeholder="Choose a username"
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

        <div className="md:col-span-2 flex justify-center mt-4">
          <Button type="submit" className="w-full max-w-xs">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
