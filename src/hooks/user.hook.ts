/* eslint-disable @typescript-eslint/no-explicit-any */
// export const useAddShop = () => {
//     return useMutation<any, Error, FieldValues, unknown>({
//       mutationFn: async (data: any) => await addVendorShop(data),
//     });
//   };

import { IApiResponse } from "@/interface/apiResponse.interface";
import { IUser } from "@/interface/user.interface";
import { queryClient } from "@/providers/Provider";
import { blockUser, deleteUser, getAllUser } from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllUser = (search: string, block: string) => {
  return useQuery<IApiResponse<IUser[]>>({
    queryKey: ["get-all-userdata", search, block],
    queryFn: async () => await getAllUser(search, block),
  });
};

export const useBlockUser = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id: string) => await blockUser(id),
    onSuccess: () => {
      // Invalidate the "get-all-userdata" query to revalidate it
      queryClient.invalidateQueries({ queryKey: ["get-all-userdata"] });
    },
  });
};

export const useDeleteUser = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id: string) => await deleteUser(id),
    onSuccess: () => {
      // Invalidate the "get-all-userdata" query to revalidate it
      queryClient.invalidateQueries({ queryKey: ["get-all-userdata"] });
    },
  });
};
