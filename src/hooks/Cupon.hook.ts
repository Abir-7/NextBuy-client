"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { createCupon, getShopCupon } from "@/services/cuponService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const useCreateCupon = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await createCupon(data),
  });
};

export const useGetShopCupon = (id: string) => {
  return useQuery<IApiResponse<any[]>>({
    enabled: !!id,
    queryKey: ["getShopCupon"],
    queryFn: async () => await getShopCupon(id),
  });
};
