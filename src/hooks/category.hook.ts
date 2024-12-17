"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { ICategory } from "@/interface/category.interface";
import { queryClient } from "@/providers/Provider";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/services/category";
import { useMutation, useQuery } from "@tanstack/react-query";

// Utility function to invalidate all category-related queries
const invalidateCategoryQueries = () => {
  ["allCategory", "allCategorys", "allCategoryDashboard"].forEach((key) =>
    queryClient.invalidateQueries({ queryKey: [key] })
  );
};

// Hook to fetch all categories for the main view
export const useAllCategory = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategory"],
    queryFn: getAllCategory,
  });
};

// Hook to fetch all categories for an alternative view
export const useAllCategory2 = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategorys"],
    queryFn: getAllCategory,
  });
};

// Hook to fetch all categories for the dashboard
export const useAllCategoryDashboard = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategoryDashboard"],
    queryFn: async () => await getAllCategory(),
  });
};

// Mutation hook for adding a category
export const useAddCategory = () => {
  return useMutation<any, Error, string, void>({
    mutationFn: async (data) => await addCategory(data),
    onSuccess: invalidateCategoryQueries,
  });
};

// Mutation hook for updating a category
export const useUpdateCategory = () => {
  return useMutation<any, Error, { id: string; name: string }, void>({
    mutationFn: async ({ id, name }) => await updateCategory(id, name),
    onSuccess: invalidateCategoryQueries,
  });
};

// Mutation hook for deleting a category
export const useDeleteCategory = () => {
  return useMutation<any, Error, string, void>({
    mutationFn: async (id: string) => await deleteCategory(id),
    onSuccess: invalidateCategoryQueries,
  });
};
