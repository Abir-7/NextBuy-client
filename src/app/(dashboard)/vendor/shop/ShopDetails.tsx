import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IShop } from "@/interface/shop.interface";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import EditProduct from "./EditProduct";
import DeleteModal from "./DeleteModal";

const ShopDetails = ({ shop }: { shop: IShop }) => {
  return (
    <>
      {shop && (
        <div className="   bg-gray-100 p-6 rounded-md shadow-md flex items-center space-x-6">
          {/* Shop Image */}
          <div className="flex-shrink-0">
            <Image
              width={200}
              height={100}
              src={shop?.images[0]}
              alt={shop?.name}
              className="w-32 h-32 object-cover rounded-md"
            />
          </div>

          {/* Shop Details */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{shop?.name}</h1>
            <p className="text-gray-600">{shop?.location}</p>
            <p className="text-sm text-gray-500">Shop ID: {shop?.shopId}</p>
          </div>
        </div>
      )}
      <div className="text-2xl font-medium text-center mt-5">Product List</div>
      <div className="mt-6">
        {shop?.products?.map((data) => (
          <Card
            key={data.productId}
            className="w-44 relative overflow-hidden group  "
          >
            <div className="absolute w-full h-full  flex-col  gap-2 justify-center hidden group-hover:flex items-center bg-opacity-60  bg-black ">
              <EditProduct product={data}></EditProduct>
              <DeleteModal id={data.productId}></DeleteModal>
            </div>
            <CardHeader className="pb-3">
              <div className="flex justify-center items-center">
                <div className="w-32 h-32   mb-2">
                  <Image
                    className="w-32 h-32 object-cover"
                    width={200}
                    height={200}
                    src={data.images[0]}
                    alt=""
                  ></Image>
                </div>
              </div>
              <CardTitle>
                <Link href={"/product/sdad"}>{data.name}</Link>
              </CardTitle>
              <CardDescription className="">Card Description</CardDescription>
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm ">{data.price}Tk</p>
                <p className="font-medium text-xs ">****</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ShopDetails;
