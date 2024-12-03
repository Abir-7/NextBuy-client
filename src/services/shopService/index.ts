/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";

export const getVendorShop = async () => {
  try {
    const res = await axiosInstance.get(`/shop`);

    return res?.data;
  } catch (error: any) {
    console.log(error?.response.data);
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
