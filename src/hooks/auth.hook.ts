/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUser, loginUser } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await createUser(data),
  });
};

export const useUserlogin = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await loginUser(data),
  });
};
