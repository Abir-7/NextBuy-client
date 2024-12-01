import NavbarUi from "@/components/ui_component/common/Navbar/NavbarUi";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="h-12 bg-slate-200 flex w-full items-center">
        <NavbarUi></NavbarUi>
      </div>
      <div className="min-h-[calc(100vh-192px)]">{children}</div>
      <div className="h-36 bg-slate-200">Footer</div>
    </div>
  );
};

export default layout;
