/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";
import { FieldValues } from "react-hook-form";

export const addProduct = async (data: FieldValues) => {
  try {
    const res = await axiosInstance.post(`/product/add-product`, data);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const allProduct = async () => {
  try {
    const res = await axiosInstance.get(`/product`);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const singleProduct = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/product/${id}`);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const updateProduct = async (pdata: {
  data: FieldValues;
  id: string;
}) => {
  try {
    const res = await axiosInstance.patch(`/product/${pdata.id}`, pdata.data);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/product/${id}`);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
