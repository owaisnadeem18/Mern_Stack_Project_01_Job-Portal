import React from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Navbar />

      <div className="sign-up-box w-full max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl border shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
        <h2 className="text-4xl font-bold text-center mb-8 underline text-cyan-950">
          SignUp
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <Label className="mb-2 px-1" htmlFor="fullname">
              Full Name
            </Label>
            <Input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <Label className="mb-2 px-1" htmlFor="email">
              Email
            </Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </div>

          {/* Username */}
          <div className="flex flex-col">
            <Label className="mb-2 px-1" htmlFor="username">
              Username
            </Label>
            <Input type="text" id="username" placeholder="Choose a username" />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <Label className="mb-2 px-1" htmlFor="phone">
              Phone Number
            </Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <Label className="mb-2 px-1" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col">
            <Label className="mb-2 px-1" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              type="password"
              id="confirmPassword"
              placeholder="Re-enter your password"
            />
          </div>

          {/* Submit button - Full width below */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <Link to={""}>
              <Button type="submit" className="cursor-pointer w-full max-w-xs">
                Create Account
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
