/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import config from "@/config";
import { IShop } from "@/interface/shop.interface";

import Image from "next/image";
import React from "react";
import CartAction from "./CartAction";
import Link from "next/link";

const ShopDetailsPage = async ({ params }: { params: any }) => {
  const { id } = await params;
  const res = await fetch(`${config.backendApi}/shop/get-single-shop/${id}`, {
    cache: "no-store",
  });
  const { data }: { data: IShop } = await res.json();

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Shop details not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Shop Header */}
      <div className="bg-white shadow rounded-md p-6 mb-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <Image
            src={data.images[0]}
            alt={data.name}
            width={400}
            height={400}
            className="w-40 h-40 object-cover rounded-full lg:mr-6"
          />
          <div>
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-gray-600 mt-2">{data.location}</p>
            <p className="text-gray-400 text-sm mt-1">
              Created at: {new Date(data.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      {data?.products?.map((option) => (
        <Card key={option?.productId} className=" xs:w-48 sm:w-64 md:w-60">
          <CardHeader className="pb-0">
            <div className="w-full h-48 overflow-hidden">
              <Image
                className="object-cover"
                width={200}
                height={200}
                src={option.images[0]}
                alt=""
              ></Image>
            </div>
            <CardTitle className="text-lg">
              <Link
                className="hover:underline underline-offset-2"
                href={`/product/${option.productId}`}
              >
                {option?.name}
              </Link>
            </CardTitle>
            <CardDescription>
              {option.description.slice(0, 30)}...
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm mt-2 pb-1 ">
            <div className="flex justify-between items-center">
              <p className="font-medium">{option.price}Tk</p>
              <CartAction option={option}></CartAction>
            </div>
            <div className="flex justify-center">
              <p className="font-medium">*****</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ShopDetailsPage;
