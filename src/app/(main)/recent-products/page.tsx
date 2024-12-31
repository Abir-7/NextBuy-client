"use client";
import AllProduct from "@/components/ui_component/common/AllProduct/AllProduct";
import { IProduct } from "@/interface/product.interface";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [recentProducts, setRecentProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("recentProducts") || "[]"
    );
    setRecentProducts(storedProducts);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold px-2 my-2">Recently Viewed</h1>
      {recentProducts.length > 0 ? <AllProduct data={recentProducts} /> : <></>}
    </div>
  );
};

export default Page;
