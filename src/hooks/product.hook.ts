/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { IProduct } from "@/interface/product.interface";
import {
  addProduct,
  allProduct,
  deleteProduct,
  singleProduct,
  updateProduct,
} from "@/services/product";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const useAddProduct = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await addProduct(data),
  });
};
export const useUpdateProduct = () => {
  return useMutation<any, Error, { data: FieldValues; id: string }, unknown>({
    mutationFn: async (data: { data: FieldValues; id: string }) =>
      await updateProduct(data),
  });
};

export const useDeleteProduct = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id) => await deleteProduct(id),
  });
};

export const useAllProduct = () => {
  return useQuery<IApiResponse<IProduct[]>>({
    queryKey: ["all-product"],
    queryFn: async () => await allProduct(),
  });
};

export const useSingleProduct = (id: string) => {
  return useQuery<IApiResponse<IProduct>>({
    enabled: !!id,
    queryKey: ["single-product"],
    queryFn: async () => await singleProduct(id),
  });
};
