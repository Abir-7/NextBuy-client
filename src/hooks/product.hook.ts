/* eslint-disable @typescript-eslint/no-explicit-any */
import { addProduct, deleteProduct, updateProduct } from "@/services/product";
import { useMutation } from "@tanstack/react-query";
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
