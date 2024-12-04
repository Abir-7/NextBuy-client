import config from "@/config";
import React from "react";
import Image from "next/image";
import { IShop } from "@/interface/shop.interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { User2 } from "lucide-react";

const ShopList = async () => {
  const res = await fetch(`${config.backendApi}/shop/get-all-shop`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Shop List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((shop: IShop) => (
          <div
            key={shop.shopId}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative h-40 w-full">
              <Image
                src={shop.images[0]}
                alt={shop.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold">{shop.name}</h2>
              <p className="text-sm text-gray-500">{shop.location}</p>
              <div className="flex justify-end">
                <p className="text-sm flex items-center font-medium">
                  <span>0</span>
                  <span>
                    {" "}
                    <User2 className="w-4 "></User2>
                  </span>
                </p>
              </div>
              <Link href={`/shop/${shop.shopId}`}>
                {" "}
                <Button className="w-full mt-2 ">View Shop</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
