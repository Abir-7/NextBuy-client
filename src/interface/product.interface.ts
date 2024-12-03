export interface IProduct {
  productId: string;
  name: string;
  price: number;
  categoryId: string;
  images: string[];
  description: string;
  stock: number;
  sizes: string[]; // Array for product sizes, e.g., ['S', 'M', 'L']
  shopId: string;
  discounts: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}
