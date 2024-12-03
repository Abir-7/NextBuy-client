"use client";

import { Dialog, DialogTitle } from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AuthContext } from "@/providers/AuthProvider";
import { DialogContent } from "@radix-ui/react-dialog";
import { ShoppingBag, Home, Database, Settings } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    roles: ["ADMIN", "CUSTOMER", "VENDOR"],
  },
  // vendor links
  {
    title: "Dashboard",
    url: "/vendor/dashboard",
    icon: Database,
    roles: ["VENDOR"],
  },
  {
    title: "Shop Management",
    roles: ["VENDOR"],
    child: [
      { url: "/vendor/manage-shop", title: "Manage Shop", icon: Settings },
      { url: "/vendor/shop", title: "Your Shop", icon: ShoppingBag },
    ],
  },
  // customer
];

export default function AppSidebar() {
  const userData = useContext(AuthContext);

  const filteredItems = items.filter((item) =>
    item.roles.includes(userData?.user?.role as string)
  );

  return (
    <Dialog>
      <Sidebar className="absolute">
        <SidebarContent>
          <DialogContent>
            <DialogTitle></DialogTitle>
          </DialogContent>

          <SidebarGroup>
            <SidebarGroupLabel>NEXT MART</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="ms-2">
                {filteredItems.map((item) => (
                  <div key={item.title}>
                    {/* Parent Item */}
                    {item.url && (
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}

                    {/* Child Items */}
                    {item.child && (
                      <>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        {item.child.map((child) => (
                          <SidebarMenuItem key={child.title}>
                            <SidebarMenuButton asChild>
                              <Link href={child.url}>
                                <child.icon />
                                <span>{child.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </>
                    )}
                  </div>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Dialog>
  );
}
