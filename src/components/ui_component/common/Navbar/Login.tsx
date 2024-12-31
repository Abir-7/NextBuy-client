import { Button } from "@/components/ui/button";
import { AuthContext } from "@/providers/AuthProvider";
import { resetCart } from "@/redux/features/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/services/authService";
import Link from "next/link";
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetUserInfo } from "@/hooks/user.hook";

export const Login = () => {
  const getDashboardLink = (role: string): string => {
    // Handle ADMIN and SUPERADMIN roles explicitly
    if (role === "ADMIN" || role === "SUPERADMIN") {
      return "/admin/my-profile";
    }
    // For other roles, default to the lowercase role
    return `/${role.toLowerCase()}/my-profile`;
  };

  const dispatch = useAppDispatch();
  const userData = useContext(AuthContext);
  const logoutUser = async () => {
    dispatch(resetCart());
    await logout();
    userData?.setIsLoading(true);
  };
  const { data } = useGetUserInfo();

  return (
    <>
      {" "}
      {!userData?.user ? (
        <Link href={"/login"}>
          {" "}
          <Button className="bg-white  hover:bg-white text-black hover:scale-95 duration-1000">
            {" "}
            Login
          </Button>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={data?.data?.image || "https://github.com/shadcn.png"}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className=" mt-1">
            <DropdownMenuItem className="">
              <Link href={getDashboardLink(userData.user.role)}>Profile</Link>
            </DropdownMenuItem>{" "}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>
              <Button className="" onClick={() => logoutUser()}>
                Logout
              </Button>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
