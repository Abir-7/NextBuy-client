import React from "react";
import AllProduct from "./AllProduct";
import config from "@/config";

const Products = async () => {
  const res = await fetch(`${config.backendApi}/product`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  return <div>{data && <AllProduct data={data}></AllProduct>}</div>;
};

export default Products;
