"use client";
import React from "react";

import {
  Card,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FlashSale = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const dataToDisplay = isMobile ? array.slice(0, 6) : array;
  return (
    <div>
      <div className="w-full justify-between py-3 flex items-center bg-black text-white px-4">
        <p> Flash Sale</p>
        <Button className="text-white" variant={"link"}>
          View all <ArrowRight></ArrowRight>
        </Button>
      </div>
      <div className="grid mt-2 justify-items-center xxs:grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-10 gap-2  container mx-auto  overflow-hidden h-[470px]  gap-y-5  sm:h-[239px]">
        {dataToDisplay.map((k, i) => (
          <Card key={i} className="w-32 h-fit m-0 p-0">
            <CardHeader className=" mb-0 pb-0  px-0 py-0">
              <div className="flex justify-center items-center  rounded-lg overflow-hidden">
                <Image
                  className=""
                  width={200}
                  height={100}
                  src={
                    "data:image/jpeg;base64,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"
                  }
                  alt=""
                ></Image>
              </div>
              <CardTitle className="text-sm px-2">
                Card Title Card Title Card Title
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs pt-0 mt-0 px-2 pb-2 ">
              <p className="text-base font-medium">$99</p>
              <p className="flex gap-4">
                <span>$120</span>
                <span>5%</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
