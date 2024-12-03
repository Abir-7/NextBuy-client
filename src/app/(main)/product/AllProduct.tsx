import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AllProduct = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container mx-auto mt-5">
      {" "}
      <div className="sm:mt-0 px-2">
        {/* filter & search */}
        <div className="flex flex-wrap justify-between">
          {/* search */}
          <div className="flex mb-3 w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search" />
            <Button type="submit">Search</Button>
          </div>
          {/* filter */}
          <div className="mb-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* product section */}
      <div className="grid gap-3 gap-y-5 justify-items-center  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-5  2xl:grid-cols-6">
        {array.map((option) => (
          <Card key={option} className=" xs:w-48 sm:w-64 md:w-60">
            <CardHeader>
              <CardTitle>
                <Link href={"/product/sdad"}>Card Title</Link>
              </CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
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
