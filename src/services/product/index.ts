/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";
import { FieldValues } from "react-hook-form";

export const addProduct = async (data: FieldValues) => {
  try {
    const res = await axiosInstance.post(`/product/add-product`, data);

    return res?.data;
  } catch (error: any) {
    console.log(error?.response.data);
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
