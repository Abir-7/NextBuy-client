"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { IShop } from "@/interface/shop.interface";
import { queryClient } from "@/providers/Provider";
import {
  addVendorShop,
  blockVendorShop,
  getAllVendorShop,
  getSingleVendorWithAllProduct,
  getVendorShop,
  getVendorSingleShop,
} from "@/services/shopService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

// Helper function to invalidate multiple queries
const invalidateQueries = (queryKeys: string[]) => {
  queryKeys.forEach((key) =>
    queryClient.invalidateQueries({ queryKey: [key] })
  );
};

export const useAddShop = () =>
  useMutation<any, Error, FieldValues>({
    mutationFn: async (data) => await addVendorShop(data),
    onSuccess: () => {
      invalidateQueries(["vendorShop", "allVendorShop"]);
    },
  });

export const useVendorShop = () =>
  useQuery<IApiResponse<IShop[]>>({
    queryKey: ["vendorShop"],
    queryFn: async () => await getVendorShop(),
  });

export const useVendorSingleShop = (id?: string, page?: number) =>
  useQuery<IApiResponse<IShop>>({
    enabled: !!id,
    queryKey: ["vendorShopSingle", id, page],
    queryFn: async () => await getVendorSingleShop(id!, page!),
  });

export const useAllVendorShop = (page: number, searchTerm: string) =>
  useQuery<IApiResponse<IShop[]>>({
    queryKey: ["allVendorShop", page, searchTerm],
    queryFn: async () => await getAllVendorShop(page, searchTerm),
  });

export const useSingleVendorShopWithAllProduct = (id: string, page: number) =>
  useQuery<IApiResponse<IShop>>({
    queryKey: ["singleVendorWithAllProduct", id, page],
    queryFn: async () => await getSingleVendorWithAllProduct(id, page),
  });

export const useBlockShop = () =>
  useMutation<any, Error, string>({
    mutationFn: async (id) => await blockVendorShop(id),
    onSuccess: () => {
      invalidateQueries([
        "all-product",
        "all-products",
        "allVendorShop",
        "singleVendorWithAllProduct",
      ]);
    },
  });
