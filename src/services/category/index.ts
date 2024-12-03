/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";

export const getAllCategory = async () => {
  try {
    const { data } = await axiosInstance.get(`/category`);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
