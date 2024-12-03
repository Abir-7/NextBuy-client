/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";

import { IShop } from "@/interface/shop.interface";

import { addVendorShop, getVendorShop } from "@/services/shopService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const useAddShop = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await addVendorShop(data),
  });
};

export const useVendorShop = () => {
  return useQuery<IApiResponse<IShop[]>>({
    queryKey: ["vendorShop"],
    queryFn: async () => await getVendorShop(),
  });
};
