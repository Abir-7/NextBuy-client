/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import config from "@/config";
import axios from "axios";

export const createUser = async (userData: any) => {
  try {
    const res = await axios.post(
      `${config.backendApi}/user/create-user`,
      userData
    );
    return res.data;
  } catch (error: any) {
    console.log("object");
    throw new Error(error);
  }
};
