"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const CartPage: React.FC = () => {
  const cartData = useAppSelector((state) => state.cartSlice);

  const { cartItems, discount, additionalDiscount, totalPrice, subTotal } =
    cartData;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 bg-white p-4 rounded shadow">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.photo}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  {item.size && <p className="text-sm">Size: {item.size}</p>}
                  <p className="text-sm">Price: ${item.price}</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-lg font-bold">
                  Subtotal: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Cart Summary */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subTotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>-${discount}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Additional Discount:</span>
            <span>-${additionalDiscount}</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
