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
  followers?: IFollower[];
}

export interface ICustomer {
  email: string;
}

export interface IFollower {
  id: string;
  shopId: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  customer: ICustomer;
}
