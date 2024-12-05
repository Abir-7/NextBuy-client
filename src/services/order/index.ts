/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axiosInstance from "@/lib/axiosInstance/axiosInstance";

export const makePayment = async (data: any) => {
  try {
    const res = await axiosInstance.post(`/order/make-payment`, data);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const getSigleUserAllOrder = async (currentPage: number) => {
  try {
    const res = await axiosInstance.get(`/order/my-order`, {
      params: {
        page: currentPage,
        limit: 15,
      },
    });

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const getSigleOrder = async (id: string) => {
  try {
    console.log(id, "gg");
    const res = await axiosInstance.get(`/order/single-order/${id}`);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
