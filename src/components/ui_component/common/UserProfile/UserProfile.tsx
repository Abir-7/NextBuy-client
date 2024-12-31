/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ChangePass from "../ChangePassword/ChangePass";

const UserProfile = ({ userInfo }: { userInfo: any }) => {
  const { name, email, address, mobile, image, user } = userInfo;
  return (
    <div className=" mx-auto p-4 bg-white  rounded-lg">
      <div className="flex items-center gap-6 p-6 border-b">
        <Image
          width={200}
          height={200}
          src={image as string}
          alt={name}
          className="w-40 h-40 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-500 capitalize">{user?.role.toLowerCase()}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-500" />
          <span className="text-gray-700">{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-green-500" />
          <span className="text-gray-700">{mobile || "N/A"}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="text-gray-700">{address || "N/A"}</span>
        </div>
      </div>
      <div className="flex justify-end p-6 gap-2 border-t">
        <ChangePass></ChangePass>
        <Button variant="outline" className="mr-2">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
