"use client";
import CButton from "@/components/ui_component/common/Form/CButton";
import CForm from "@/components/ui_component/common/Form/CForm";
import CInput from "@/components/ui_component/common/Form/CInput";
import CSelect from "@/components/ui_component/common/Form/CSelect";
import { useUserRegistration } from "@/hooks/auth.hook";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const SignupPage = () => {
  const router = useRouter();
  const { mutate, data } = useUserRegistration();
  console.log(data, "data");

  const onFromSubmit = async (data: FieldValues) => {
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        toast.success("User has been created");
        router.push("/login");
      },
      onError: (error: Error) => {
        toast.success("Something Went Wrong");
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
            <CInput name="name" label="Name" type="text"></CInput>
            <CInput name="address" label="Address" type="text"></CInput>
            <CInput name="mobile" label="Mobile" type="number"></CInput>
            <CInput name="password" label="Password" type="password"></CInput>
            <CSelect
              text="Select Account Type"
              options={[
                { value: "CUSTOMER", label: "Customer" },
                { value: "VENDOR", label: "Seller" },
              ]}
              name="accountType"
              label="Open account as:"
            ></CSelect>
            <CButton text="Submit" type="submit"></CButton>
          </div>
        </CForm>{" "}
        <div className="flex justify-end">
          <Link href={"/login"} className=" flex font-medium w-fit mt-2">
            {" "}
            <span className=" gap-2 ">Go to Login page </span>{" "}
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

export default SignupPage;
