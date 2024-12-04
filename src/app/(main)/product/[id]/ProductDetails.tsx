"use client";
import { Button } from "@/components/ui/button";
import { useSingleProduct } from "@/hooks/product.hook";
import { addItemToCart, ICartItem } from "@/redux/features/cartSlice/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";

import React, { useState } from "react";

const ProductDetails = ({ id }: { id: string }) => {
  const { data: { data: product } = {} } = useSingleProduct(id);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      username: "John Doe",
      rating: 4,
      comment: "Great quality sneakers! Very comfortable and stylish.",
    },
    {
      username: "Jane Smith",
      rating: 5,
      comment: "Absolutely love these sneakers! Worth every penny.",
    },
    {
      username: "Sam Wilson",
      rating: 3,
      comment: "Good sneakers, but the sizing runs a bit small.",
    },
    {
      username: "Alice Brown",
      rating: 5,
      comment: "Perfect for my daily runs! Highly recommend.",
    },
    {
      username: "Tom Hardy",
      rating: 4,
      comment: "Stylish and durable, but delivery took too long.",
    },
  ];
  const dispatch = useAppDispatch();
  const handleAddToCart = (data: ICartItem) => {
    dispatch(addItemToCart(data));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex justify-center w-full">
            {product && (
              <Image
                width={400}
                height={200}
                src={product?.images[index]}
                alt={"ddgdg"}
                className=" lg:w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] object-cover rounded-lg border"
              />
            )}
          </div>
          <div className="flex justify-center gap-4">
            {product?.images.map((image, idx) => (
              <Image
                onClick={() => setIndex(idx)}
                width={100}
                height={100}
                key={idx}
                src={image}
                alt={`Product ${idx + 1}`}
                className="w-20 h-20 rounded-lg border cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <p className="text-gray-700 mt-4">{product?.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            ${product?.price}
          </p>

          {/* Size Selection */}
          <div className="mt-6">
            <h2 className="font-medium">Select Size:</h2>
            <div className="flex gap-4 mt-2">
              {product?.sizes.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2  ${
                    selectedSize === size
                      ? ""
                      : "bg-white text-gray-800 hover:text-white"
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mt-6">
            <h2 className="font-medium">Quantity:</h2>
            <div className="flex gap-4 mt-2">
              <Button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                -
              </Button>
              <span className="px-4 py-1 border rounded-lg">{quantity}</span>
              <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>
            </div>
          </div>

          {/* Add to Cart */}
          {product && (
            <Button
              onClick={() =>
                handleAddToCart({
                  category: product?.category.name,
                  id: product?.productId,
                  photo: product?.images[0],
                  price: product?.price,
                  quantity,
                  title: product.name,
                  size: selectedSize,
                })
              }
              disabled={quantity <= 0}
              className={`mt-6 w-full py-5 text-white font-bold rounded-lg `}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">User Reviews</h2>
        <div className="mt-6 h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">{review.username}</p>
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={starIdx < review.rating ? "gold" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-5 h-5 text-yellow-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.13 6.574a1 1 0 00.95.69h6.9c.969 0 1.371 1.24.588 1.81l-5.583 4.077a1 1 0 00-.364 1.118l2.13 6.574c.3.921-.755 1.688-1.538 1.118L12 18.26l-5.684 4.144c-.783.57-1.838-.197-1.538-1.118l2.13-6.574a1 1 0 00-.364-1.118L1.96 12.001c-.783-.57-.381-1.81.588-1.81h6.9a1 1 0 00.95-.69l2.13-6.574z"
                        />
                      </svg>
                    ))}
                </div>
              </div>
              <p className="text-gray-600 mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
