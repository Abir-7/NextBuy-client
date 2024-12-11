"use client";
import React, { useEffect, useState } from "react";
import ShopDetails from "./ShopDetails";
import { useVendorShop, useVendorSingleShop } from "@/hooks/shop.hook";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const { data, isLoading } = useVendorShop();
  console.log(data);
  const [selected, setSelected] = useState(data?.data[0].shopId || "");
  const { data: { data: singleShop } = {}, isLoading: isShopDetailsLoading } =
    useVendorSingleShop(selected);

  useEffect(() => {
    if (data?.data[0]?.shopId) {
      setSelected(data?.data[0]?.shopId);
    }
  }, [data, isLoading]);

  return (
    <div className="px-5">
      <div className="mb-5 mt-2 ">
        <Select
          onValueChange={(shopId) => setSelected(shopId)}
          value={selected}
          disabled={!data || data?.data.length <= 0}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Choose Your Shop" />
          </SelectTrigger>
          <SelectContent>
            {data?.data.map((option, i) => (
              <SelectItem key={i} value={option?.shopId}>
                {option?.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isShopDetailsLoading || isLoading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-solid border-gray-900"></div>
        </div>
      ) : (
        <>
          {singleShop ? (
            <ShopDetails shop={singleShop!}></ShopDetails>
          ) : (
            <div className=" mt-2  h-10 flex justify-center shadow-inner">
              <p className="font-medium text-zinc-500 mt-3">
                No data available
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Shop;
