"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IOrder } from "@/interface/order.interface";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const OrderTable = ({ orderData }: { orderData: IOrder[] }) => {
  const path = usePathname();

  return (
    <Table>
      <TableCaption>A list of your recent transactions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Transaction ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead className="min-w-[150px]">Items</TableHead>
          <TableHead className="text-right">Subtotal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orderData.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              <Link href={`${path}/${order.id}`}>{order.transactionId}</Link>
            </TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.paymentStatus}</TableCell>
            <TableCell className="">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-2 mb-1">
                  <Image
                    width={100}
                    height={100}
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-10 h-10 rounded"
                  />
                  <span className="text-sm font-medium">
                    {item.product.name}
                  </span>
                </div>
              ))}
            </TableCell>
            <TableCell className="text-right">
              ${order.subTotal.toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
