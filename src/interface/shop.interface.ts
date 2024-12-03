import { IProduct } from "./product.interface";

export interface IShop {
  shopId: string;
  name: string;
  location: string;
  images: string[];
  vendorId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  products?: IProduct[]; // Array of products
}
