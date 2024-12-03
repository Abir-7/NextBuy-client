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
const AddProduct = () => {
  const onFromSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>

      <CardContent>
        <CForm onFromSubmit={onFromSubmit}>
          <div className="grid gap-3">
            <CImage name="images" label="Product Image"></CImage>

            <CInput name="name" label="Product Name" type="text"></CInput>
            <CInput name="price" label="Price" type="number"></CInput>
            <CInput name="stock" label="Quantity" type="number"></CInput>
            <CSelect
              options={[{ label: "Earphone", value: "earphone" }]}
              label="Category"
              text="Select Category"
              name="category"
            ></CSelect>
            <CSelect
              options={[{ label: "Earphone", value: "earphone" }]}
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
