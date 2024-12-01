import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui_component/common/SideBar/SideBar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <div className="">
          <SidebarTrigger />
        </div>
        <div className="px-1">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
