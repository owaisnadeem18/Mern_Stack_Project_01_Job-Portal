import Footer from "@/components/ui/shared/Footer";
import Navbar from "@/components/ui/shared/Navbar";
import React from "react";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {

  return (
    <>
      <Navbar />
      <ProfileDetails />
      <Footer  />
    </>
  );
};

export default Profile;
