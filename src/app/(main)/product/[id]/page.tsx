import React from "react";
import ProductDetails from "./ProductDetails";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);
  return <div>{id && <ProductDetails id={id}></ProductDetails>}</div>;
};

export default ProductDetailsPage;
