"use client";
import React, { useContext, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBars, FaSearch } from "react-icons/fa";
import { AuthContext } from "@/providers/AuthProvider";

import { ShoppingBasket, X } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";

import { DropdownMenuNavbar } from "./Dropdown";
import { Login } from "./Login";

import NavSearch from "./NavSearch";

interface INavLinkChild {
  name: string;
  link: string;
}

interface INavLink {
  name: string;
  link?: string;
  child?: INavLinkChild[];
}

const NavbarUi = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
  };

  const getDashboardLink = (role: string): string => {
    if (role === "ADMIN" || role === "SUPERADMIN") {
      return "/admin/dashboard";
    }
    return `/${role.toLowerCase()}/dashboard`;
  };
  const userData = useContext(AuthContext);

  const navLinkList: INavLink[] = [
    {
      name: "Shops",
      link: "/shop",
    },
    ...(userData?.user
      ? [
          {
            name: "Dashboard",
            link: getDashboardLink(userData.user.role),
          },
        ]
      : []),
  ];

  return (
    <div className="sticky flex bg-black items-center h-14 top-0 z-10">
      {" "}
      <div className="flex h-full flex-col justify-center w-full">
        <div className="flex  py-1 justify-between items-center w-full px-2">
          <div className="text-xl text-white font-bold">
            <Link href={"/"}>NextMart</Link>
          </div>
          <div className="gap-6 hidden items-center md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <DropdownMenuNavbar></DropdownMenuNavbar>
                {navLinkList.map((item) => {
                  if (item.name && item?.child) {
                    return (
                      <NavigationMenuItem key={item.name}>
                        <NavigationMenuTrigger
                          className={`${navigationMenuTriggerStyle({
                            className:
                              "bg-transparent data-[state=open]:bg-transparent focus:text-white focus:bg-transparent active:bg-transparent text-white hover:bg-transparent hover:text-white hover:underline underline-offset-2 ",
                          })}   `}
                        >
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="grid bg-zinc-950 ">
                          {item?.child.map((childItem) => (
                            <Link
                              className="w-full "
                              key={childItem.name}
                              href={childItem.link}
                              legacyBehavior
                              passHref
                            >
                              <NavigationMenuLink
                                style={{ justifyContent: "flex-start" }}
                                className={`${navigationMenuTriggerStyle({
                                  className:
                                    "bg-transparent focus:bg-black focus:text-white text-white hover:bg-transparent hover:text-white hover:underline underline-offset-2 ",
                                })}  w-44 `}
                              >
                                {childItem.name}
                              </NavigationMenuLink>
                            </Link>
                          ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  } else {
                    return (
                      <NavigationMenuItem key={item.name}>
                        <Link
                          href={item.link as string}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle({
                              className:
                                "bg-transparent focus:bg-black focus:text-white text-white active:bg-transparent hover:bg-transparent hover:text-white hover:underline underline-offset-2 ",
                            })}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  }
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex gap-4">
              <button
                className="text-white flex items-center gap-1"
                onClick={toggleSearchBar}
              >
                <FaSearch />
              </button>
              {userData?.user?.role == "CUSTOMER" && <Cart></Cart>}
              <Login></Login>
            </div>
          </div>
          <div className="md:hidden flex gap-4">
            <button
              className="text-white flex items-center gap-1"
              onClick={toggleSearchBar}
            >
              <FaSearch />
            </button>
            {userData?.user?.role == "CUSTOMER" && <Cart></Cart>}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none flex h-full items-center ">
                  <FaBars className="text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-2 md:hidden bg-black text-white ">
                  <DropdownMenuNavbar></DropdownMenuNavbar>
                  {navLinkList.map((navLink) => {
                    if (navLink?.name && navLink?.child) {
                      return (
                        <DropdownMenuSub key={navLink.name}>
                          <DropdownMenuSubTrigger>
                            {navLink.name}
                          </DropdownMenuSubTrigger>
                          <DropdownMenuSubContent>
                            {navLink.child.map((child) => (
                              <DropdownMenuItem key={child.name}>
                                <Link href={child.link}>{child.name}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuSub>
                      );
                    }
                    if (navLink?.name && navLink?.link) {
                      return (
                        <DropdownMenuItem
                          key={navLink.name}
                          className="hover:bg-white hover:text-black"
                        >
                          <Link href={navLink.link}>{navLink.name}</Link>
                        </DropdownMenuItem>
                      );
                    }
                  })}

                  <div className="px-2 pb-1 mt-2  ">
                    <Login></Login>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      {showSearch && (
        <div className="bg-zinc-950 top-[56px] max-h-96 overflow-auto right-0 absolute w-full max-w-lg border-b border-b-zinc-200 rounded-b-xl">
          <div className="flex justify-end mt-0.5 px-1">
            <button
              onClick={toggleSearchBar}
              className="ml-2 text-gray-500  hover:text-gray-700"
            >
              <X className="text-white"></X>
            </button>
          </div>
          <NavSearch toggleSearchBar={toggleSearchBar}></NavSearch>
        </div>
      )}
    </div>
  );
};

export default NavbarUi;

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cartSlice);

  return (
    <Link href={"/cart"} className="text-white flex gap-1 items-center">
      <ShoppingBasket />{" "}
      <span className="text-green-500">
        {cartItems.length > 0 && cartItems.length}
      </span>
    </Link>
  );
};
