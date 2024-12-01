"use client";
import CButton from "@/components/ui_component/common/Form/CButton";
import CForm from "@/components/ui_component/common/Form/CForm";
import CInput from "@/components/ui_component/common/Form/CInput";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useUserRegistration } from "@/hooks/auth.hook";
import { toast } from "sonner";

const LoginPage = () => {
  const { mutate, isPending } = useUserRegistration();
  console.log(isPending);
  const onFromSubmit = async (data: FieldValues) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success("User has been created");
      },
      onError: (error: Error) => {
        console.log(error);
      },
    });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-96 ">
        <CForm onFromSubmit={onFromSubmit}>
          <div className="grid gap-3">
            {" "}
            <CInput name="email" label="Email" type="email"></CInput>
            <CInput name="password" label="Password" type="password"></CInput>
            <CButton text="Submit" type="submit"></CButton>
          </div>
        </CForm>{" "}
        <div className="flex justify-end">
          <Link href={"/signup"} className=" flex font-medium w-fit mt-2">
            {" "}
            <span className=" gap-2 ">Go to signup page </span>{" "}
            <span className="mt-1">
              {" "}
              <ArrowRight size={17} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
