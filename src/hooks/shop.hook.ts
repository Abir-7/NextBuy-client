import { IApiResponse } from "@/interface/apiResponse.interface";

import { IShop } from "@/interface/shop.interface";

import { getVendorShop } from "@/services/shopService";
import { useQuery } from "@tanstack/react-query";

export const useVendorShop = () => {
  return useQuery<IApiResponse<IShop[]>>({
    queryKey: ["vendorShop"],
    queryFn: async () => await getVendorShop(),
  });
};
