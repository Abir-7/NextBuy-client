"use client";
import { IApiResponse } from "@/interface/apiResponse.interface";
import { IUserDashboardData } from "@/interface/dashboard.interface";
import {
  getAdminDashboar,
  getUserDashboar,
  getVendorDashboar,
} from "@/services/dashboardService";
import { useQuery } from "@tanstack/react-query";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useGetUserDashboard = () => {
  return useQuery<IApiResponse<IUserDashboardData>>({
    queryKey: ["getUserDashboard"],
    queryFn: async () => await getUserDashboar(),
  });
};

export const useGetVendorDashboard = () => {
  return useQuery<IApiResponse<any>>({
    queryKey: ["getVendorDashboard"],
    queryFn: async () => await getVendorDashboar(),
  });
};

export const useGetAdminDashboard = () => {
  return useQuery<IApiResponse<any>>({
    queryKey: ["getAdminDashboard"],
    queryFn: async () => await getAdminDashboar(),
  });
};
