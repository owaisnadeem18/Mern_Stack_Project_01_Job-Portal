import React from "react";
import Navbar from "../ui/shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import SignUpForm from "../forms/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Navbar />
      <SignUpForm />
    </>
  );
};

export default SignUp;
