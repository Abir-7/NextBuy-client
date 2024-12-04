import { IShop } from "./shop.interface";

interface IProductCategory {
  categoryId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface IProduct {
  productId: string;
  name: string;
  price: number;
  categoryId: string;
  images: string[];
  description: string;
  stock: number;
  sizes: string[];
  shopId: string;
  discounts: number;
  createdAt: Date;
  updatedAt: Date;
  category: IProductCategory;
  shop: IShop;
}
