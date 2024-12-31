"use client";

import React from "react";
import { useGetUserInfo } from "@/hooks/user.hook";

import UserProfile from "@/components/ui_component/common/UserProfile/UserProfile";

const CustomerProfile = () => {
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

export default CustomerProfile;
