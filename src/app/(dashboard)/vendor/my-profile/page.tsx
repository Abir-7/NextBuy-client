"use client";
import UserProfile from "@/components/ui_component/common/UserProfile/UserProfile";
import { useGetUserInfo } from "@/hooks/user.hook";
import React from "react";

const VendorProfile = () => {
  const { data } = useGetUserInfo();

  const userInfo = data?.data;

  if (!userInfo) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <>
      <UserProfile userInfo={userInfo}></UserProfile>
    </>
  );
};

export default VendorProfile;
