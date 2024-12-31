"use client";

import CButton from "@/components/ui_component/common/Form/CButton";
import CForm from "@/components/ui_component/common/Form/CForm";
import CInput from "@/components/ui_component/common/Form/CInput";
import Link from "next/link";
import React, { useContext } from "react";
import { FieldValues } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useUserlogin } from "@/hooks/auth.hook";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";
import { ResetPassModal } from "./ResetPassModal";

const LoginPage = () => {
  const authData = useContext(AuthContext);
  const router = useRouter();
  const { mutate, isPending } = useUserlogin();

  const onFormSubmit = async (data: FieldValues) => {
    mutate(data, {
      onSuccess: async () => {
        router.push(`/`);
        authData?.setIsLoading(true);
        toast.success("Welcome back to Next Mart!");
      },
      onError: (error: Error) => {
        toast.error(error.message || "Something went wrong. Please try again!");
      },
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back to Next Mart
        </h1>
        <CForm onFromSubmit={onFormSubmit}>
          <div className="grid gap-4">
            <CInput name="email" label="Email Address" type="email" />
            <CInput name="password" label="Password" type="password" />
            <CButton isPending={isPending} text="Login" type="submit" />
          </div>
        </CForm>
        <div className="flex justify-between items-center mt-4">
          <ResetPassModal />
          <Link
            href="/signup"
            className="flex font-medium items-center hover:underline text-sm"
          >
            Create an account <ArrowRight size={17} className="mt-0.5" />
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            By logging in, you agree to our{" "}
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

export default LoginPage;
