import { IApiResponse } from "@/interface/apiResponse.interface";
import { ICategory } from "@/interface/category.interface";
import { getAllCategory } from "@/services/category";
import { useQuery } from "@tanstack/react-query";

export const useAllCategory = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategory"],
    queryFn: () => getAllCategory(),
  });
};
