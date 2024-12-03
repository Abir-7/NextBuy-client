"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CForm from "@/components/ui_component/common/Form/CForm";
import CGroupCheckbox from "@/components/ui_component/common/Form/CGroupCheckbox";
import { FieldValues } from "react-hook-form";
import CButton from "@/components/ui_component/common/Form/CButton";
import CInput from "@/components/ui_component/common/Form/CInput";
import CSelect from "@/components/ui_component/common/Form/CSelect";
import CImage from "@/components/ui_component/common/Form/CImage";
import { useAllCategory } from "@/hooks/category.hook";
import { useVendorShop } from "@/hooks/shop.hook";
import { uploadImagesToCloudinary } from "@/lib/utils/uploadImageArray";
import { toast } from "sonner";
import { useAddProduct } from "@/hooks/product.hook";

const AddProduct = () => {
  const { data } = useAllCategory();
  const { mutate } = useAddProduct();
  const { data: shopData } = useVendorShop();
  console.log(shopData);
  const onFromSubmit = async (data: FieldValues) => {
    console.log(data);
    const { images: imageFiles, ...otherData } = data;
    const imageUrl = await uploadImagesToCloudinary(imageFiles);
    console.log(imageUrl, "image url");
    if (imageUrl) {
      mutate(
        { ...otherData, images: imageUrl },
        {
          onSuccess: () => {
            toast.success("Product added.");
          },
          onError: () => {
            toast.error("Something went wrong! Try again.");
          },
        }
      );
    } else {
      toast.error("Something went wrong! Try again.");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>

      <CardContent className="">
        <CForm onFromSubmit={onFromSubmit}>
          <div className="grid gap-3">
            <CImage name="images" label="Product Image"></CImage>

            <CInput name="name" label="Product Name" type="text"></CInput>
            <CInput name="price" label="Price" type="number"></CInput>
            <CInput name="stock" label="Quantity" type="number"></CInput>
            <CSelect
              options={
                data?.data
                  ? data?.data?.map((info) => {
                      return { label: info?.name, value: info?.categoryId };
                    })
                  : []
              }
              label="Category"
              text="Select Category"
              name="categoryId"
            ></CSelect>
            <CSelect
              options={
                shopData?.data
                  ? shopData?.data?.map((info) => {
                      return { label: info?.name, value: info?.shopId };
                    })
                  : []
              }
              label="Select Shop"
              text="Select Shop"
              name="shopId"
            ></CSelect>
            <CGroupCheckbox></CGroupCheckbox>

            <CButton type="submit" text="Add Product"></CButton>
          </div>
        </CForm>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
