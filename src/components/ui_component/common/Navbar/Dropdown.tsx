"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAllCategory } from "@/hooks/category.hook";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setCategoryId } from "@/redux/features/cartSlice/cartSlice";

export function DropdownMenuNavbar() {
  const { data } = useAllCategory();
  const dropDownLinks = [
    {
      name: "All Products",
      link: "/product",
    },
    {
      name: "Browse by Category",
      child: data?.data?.map((category) => ({
        name: category.name,
        link: "/product",
        _id: category.categoryId,
      })),
    },
  ];

  const dispatch = useAppDispatch();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-white px-2 h-8 m-0 hover:text-zinc-950  hover:bg-zinc-50 bg-transparent font-normal w-full justify-start md:hover:text-zinc-50 md:font-medium md:text-zinc-50 md:hover:bg-transparent underline-offset-2 md:hover:underline md:bg-transparent ">
          <span className="flex items-center">
            {" "}
            Products{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ">
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          {dropDownLinks.map((links, i) => {
            if (links.link) {
              return (
                <DropdownMenuItem key={i}>
                  <Link
                    onClick={() => dispatch(setCategoryId("reset"))}
                    href="/product"
                  >
                    {" "}
                    <span>{links.name}</span>
                  </Link>
                </DropdownMenuItem>
              );
            }
            <DropdownMenuSeparator />;
            if (links?.child) {
              return (
                <DropdownMenuSub key={links.name}>
                  <DropdownMenuSubTrigger>
                    <span>{links.name}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {links.child.map((link, i) => {
                        return (
                          <DropdownMenuItem key={i}>
                            <Link
                              href="/product"
                              onClick={() => dispatch(setCategoryId(link._id))}
                            >
                              {" "}
                              <span>{link.name}</span>
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              );
            }
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
