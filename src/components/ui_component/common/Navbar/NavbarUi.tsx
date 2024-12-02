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

const NavbarUi = () => {
  const data = useContext(AuthContext);

  const navLinkList = [
    {
      name: "Items",
      child: [
        {
          name: "Item One",
          link: "#",
        },
        {
          name: "Item Two",
          link: "#",
        },
      ],
    },
    {
      name: "Itemss",
      child: [
        {
          name: "Item Three",
          link: "#",
        },
        {
          name: "Item Four",
          link: "#",
        },
      ],
    },
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Dashboard",
      link: `/${data?.user?.role.toLowerCase()}/dashboard`,
    },
  ];

  return (
    <div className="flex justify-between w-full px-2">
      <div className="text-xl font-bold">Logo</div>
      <div className=" gap-6 hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinkList.map((item) => {
              if (item.name && item.child) {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                    <NavigationMenuContent className="grid ">
                      {item.child.map((childItem) => (
                        <Link
                          className="w-full"
                          key={childItem.name}
                          href={childItem.link}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            style={{ justifyContent: "flex-start" }}
                            className={`${navigationMenuTriggerStyle()}  w-44`}
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
                        className={navigationMenuTriggerStyle()}
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
          <DropdownMenuTrigger className="outline-none ">
            <FaBars />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-3 md:hidden">
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>My Account</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>Privacy</DropdownMenuItem>
                <DropdownMenuItem>Notifications</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavbarUi;

const Login = () => {
  return (
    <>
      <Link href={"/login"}>
        {" "}
        <Button>Login</Button>
      </Link>
    </>
  );
};
