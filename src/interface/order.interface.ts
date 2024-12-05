import { IProduct } from "./product.interface";
import { IShop } from "./shop.interface";
export interface IOrder {
  id: string;
  customerId: string;
  total: number;
  discounts: number;
  subTotal: number;
  status: "PENDING" | "COMPLETED" | "CANCELLED"; // Adjust based on possible statuses
  paymentStatus: "PENDING" | "COMPLETED" | "FAILED"; // Adjust as needed
  transactionId: string;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  items: IOrderItem[];
}

export interface IOrderItem {
  id: string;
  orderId: string;
  productId: string;
  shopId: string;
  size: string | null;
  quantity: number;
  price: number;
  discount: number;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  product: IProduct;
  shop?: IShop;
}
