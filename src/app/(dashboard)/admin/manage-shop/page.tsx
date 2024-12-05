"use client";
import { useAllVendorShop } from "@/hooks/shop.hook";
import React from "react";
import ShopTable from "./ShopTable";

const ManageShop = () => {
  const { data } = useAllVendorShop();

  return <div>{data && <ShopTable shopData={data?.data}></ShopTable>}</div>;
};

export default ManageShop;
