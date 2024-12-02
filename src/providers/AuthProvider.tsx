"use client";

import { getCurrentUser } from "@/services/authService";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IAuthUser {
  email: string;
  role: string;
  userId: string;
}
export interface IUserProviderValues {
  user: IAuthUser | null;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<IAuthUser | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<IUserProviderValues | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IAuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null); // Handle the case where user fetch fails
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  const value = { user, isLoading, setUser, setIsLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
