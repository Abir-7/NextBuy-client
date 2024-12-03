import React, { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui_component/common/SideBar/SideBar";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-2xl relative overflow-hidden">
      <SidebarProvider>
        <AppSidebar />

        <main className="w-full h-full">
          <div className="">
            <SidebarTrigger />
          </div>
          <div className="px-1">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default layout;
