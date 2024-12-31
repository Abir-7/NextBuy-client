"use client";

import CButton from "@/components/ui_component/common/Form/CButton";
import CForm from "@/components/ui_component/common/Form/CForm";
import CInput from "@/components/ui_component/common/Form/CInput";
import CSelect from "@/components/ui_component/common/Form/CSelect";
import { useUserRegistration } from "@/hooks/auth.hook";
import { IUserToken } from "@/interface/token.interface";
import { AuthContext } from "@/providers/AuthProvider";
import { jwtDecode } from "jwt-decode";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const SignupPage = () => {
  const router = useRouter();
  const { mutate, isPending } = useUserRegistration();
  const auth = useContext(AuthContext);

  const onFormSubmit = async (data: FieldValues) => {
    mutate(data, {
      onSuccess: async (data) => {
        const decoded = jwtDecode<IUserToken>(data?.data as string);
        toast.success("User account successfully created!");
        auth?.setIsLoading(true);

        if (decoded?.role === "VENDOR") {
          router.push(`/${decoded.role.toLowerCase()}/manage-shop`);
        } else {
          router.push("/login");
        }
      },
      onError: () => {
        toast.error("Something went wrong. Please try again!");
      },
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Your Account
        </h1>
        <CForm onFromSubmit={onFormSubmit}>
          <div className="grid gap-4">
            <CInput name="email" label="Email Address" type="email" />
            <CInput name="name" label="Full Name" type="text" />
            <CInput name="address" label="Address" type="text" />
            <CInput name="mobile" label="Mobile Number" type="number" />
            <CInput name="password" label="Password" type="password" />
            <CSelect
              text="Select Account Type"
              options={[
                { value: "CUSTOMER", label: "Customer" },
                { value: "VENDOR", label: "Seller" },
              ]}
              name="accountType"
              label="Open Account As:"
            />
            <CButton isPending={isPending} text="Sign Up" type="submit" />
          </div>
        </CForm>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
