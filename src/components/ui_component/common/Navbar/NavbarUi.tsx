"use client";
import React, { useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "@/providers/AuthProvider";
import { logout } from "@/services/authService";

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
  const userData = useContext(AuthContext);

  const navLinkList: INavLink[] = [
    // {
    //   name: "Items",
    //   child: [
    //     {
    //       name: "Item One",
    //       link: "#",
    //     },
    //     {
    //       name: "Item Two",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   name: "Itemss",
    //   child: [
    //     {
    //       name: "Item Three",
    //       link: "#",
    //     },
    //     {
    //       name: "Item Four",
    //       link: "#",
    //     },
    //   ],
    // },
    {
      name: "Products",
      link: "/product",
    },
    ...(userData?.user
      ? [
          {
            name: "Dashboard",
            link: `/${userData.user.role?.toLowerCase()}/dashboard`,
          },
        ]
      : []),
  ];
  return (
    <div className="flex  justify-between w-full px-2">
      <div className="text-xl text-white font-bold">
        <Link href={"/"}>NextBuy</Link>
      </div>
      <div className=" gap-6 hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinkList.map((item) => {
              if (item.name && item?.child) {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="grid ">
                      {item?.child.map((childItem) => (
                        <Link
                          className="w-full"
                          key={childItem.name}
                          href={childItem.link}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            style={{ justifyContent: "flex-start" }}
                            className={`${navigationMenuTriggerStyle({
                              className:
                                "bg-transparent text-white hover:bg-transparent hover:text-white hover:underline underline-offset-2 ",
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
                    <Link href={item.link as string} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle({
                          className:
                            "bg-transparent text-white hover:bg-transparent hover:text-white hover:underline underline-offset-2 ",
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
        <div>
          <Login></Login>
        </div>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none flex h-full items-center ">
            <FaBars className="text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 md:hidden bg-black text-white ">
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
  );
};

export default NavbarUi;

const Login = () => {
  const userData = useContext(AuthContext);
  const logoutUser = async () => {
    await logout();
    userData?.setIsLoading(true);
  };

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
        <Button
          className="bg-white  hover:bg-white text-black hover:scale-95"
          onClick={() => logoutUser()}
        >
          Logout
        </Button>
      )}
    </>
  );
};
