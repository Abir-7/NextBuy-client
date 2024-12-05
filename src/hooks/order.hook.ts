/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { IOrder } from "@/interface/order.interface";
import {
  getSigleOrder,
  getSigleUserAllOrder,
  makePayment,
} from "@/services/order";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useMakeOrder = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMutation<any, Error, any, unknown>({
    mutationFn: (data: any) => makePayment(data),
  });
};

export const useSigleUserAllOrder = (currentPage: number) => {
  return useQuery<IApiResponse<IOrder[]>>({
    queryKey: ["user-all-order", currentPage],
    queryFn: async () => await getSigleUserAllOrder(currentPage),
  });
};

export const useSingleOrder = (id: string) => {
  return useQuery<IApiResponse<IOrder>>({
    enabled: !!id,
    queryKey: ["user-single-order", id],
    queryFn: async () => await getSigleOrder(id),
  });
};
