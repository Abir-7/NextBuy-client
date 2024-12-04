"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IProduct } from "@/interface/product.interface";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToCart, ICartItem } from "@/redux/features/cartSlice/cartSlice";

const AllProduct = ({ data }: { data: IProduct[] }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (data: ICartItem) => {
    dispatch(addItemToCart(data));
  };

  return (
    <div className="container mx-auto mt-2">
      {" "}
      {/* product section */}
      <div className="grid gap-3 gap-y-5 justify-items-center  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-5  2xl:grid-cols-6">
        {data?.map((option) => (
          <Card key={option?.productId} className=" xs:w-48 sm:w-64 md:w-60">
            <CardHeader className="pb-0">
              <div className="w-full h-36 sm:h-44 md:h-48 overflow-hidden">
                <Image
                  className="object-cover h-full"
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
                <Button
                  onClick={() =>
                    handleAddToCart({
                      category: option?.category.name,
                      id: option?.productId,
                      photo: option?.images[0],
                      price: option?.price,
                      quantity: 1,
                      title: option.name,
                      size: option.sizes.length > 0 ? option.sizes[0] : "",
                    })
                  }
                  className="hover:text-green-500"
                  size={"sm"}
                >
                  <FaCartPlus></FaCartPlus>
                </Button>
              </div>
              <div className="flex justify-center">
                <p className="font-medium">*****</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mb-5">
        <Button type="button">Show More</Button>
      </div>
    </div>
  );
};

export default AllProduct;