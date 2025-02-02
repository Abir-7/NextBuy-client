import Footer from "@/components/ui_component/common/Footer/Footer";
import NavbarUi from "@/components/ui_component/common/Navbar/NavbarUi";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <NavbarUi></NavbarUi>

      <div className="min-h-[calc(100vh-192px)]">{children}</div>

      <Footer />
    </div>
  );
};

export default layout;
