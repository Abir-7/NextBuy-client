import { cartItemCalculation } from "@/lib/utils/cartPriceCalculation";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  title: string;
  id: string;
  category: string;
  size?: string;
  price: number;
  quantity: number;
  photo: string;
  shopId: string;
  discount: number; // Item-level discount in percentage
}

interface ICartState {
  cartItems: ICartItem[];
  totalPriceBeforeDiscount: number; // Total price before any discount
  itemLevelDiscount: number; // Total item-level discounts
  initialDiscount: number; // Discount applied if total price >= 600
  additionalDiscount: number; // User-applied additional discount
  totalDiscount: number; // Total discount amount
  subTotal: number; // Final total after all discounts
}

const initialState: ICartState = {
  cartItems: [],
  totalPriceBeforeDiscount: 0,
  itemLevelDiscount: 0,
  initialDiscount: 0,
  additionalDiscount: 0,
  totalDiscount: 0,
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id, size, quantity } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.size === size
      );

      if (itemIndex !== -1) {
        // Update quantity if item exists
        state.cartItems[itemIndex].quantity += quantity;
      } else {
        // Add new item to the cart
        state.cartItems.push(action.payload);
      }

      // Recalculate prices
      const priceData = cartItemCalculation(
        state.cartItems,
        state.additionalDiscount
      );
      Object.assign(state, priceData);
    },

    increaseItem: (
      state,
      action: PayloadAction<{ id: string; size?: string }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemIndex !== -1) {
        // Increase item quantity
        state.cartItems[itemIndex].quantity += 1;
      }

      // Recalculate prices
      const priceData = cartItemCalculation(
        state.cartItems,
        state.additionalDiscount
      );
      Object.assign(state, priceData);
    },

    decreaseItem: (
      state,
      action: PayloadAction<{ id: string; size?: string }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        // Decrease quantity
        item.quantity -= 1;

        // Remove item if quantity reaches 0
        if (item.quantity === 0) {
          state.cartItems.splice(itemIndex, 1);
        }
      }

      // Recalculate prices
      const priceData = cartItemCalculation(
        state.cartItems,
        state.additionalDiscount
      );
      Object.assign(state, priceData);
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      // Filter out the item by ID
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // Recalculate prices
      const priceData = cartItemCalculation(
        state.cartItems,
        state.additionalDiscount
      );
      Object.assign(state, priceData);
    },

    setAdditionalDiscount: (state, action: PayloadAction<number>) => {
      // Update additional discount
      state.additionalDiscount = action.payload;

      // Recalculate prices
      const priceData = cartItemCalculation(
        state.cartItems,
        state.additionalDiscount
      );
      Object.assign(state, priceData);
    },

    resetCart: () => initialState, // Reset the cart to its initial state
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  increaseItem,
  decreaseItem,
  removeItemFromCart,
  setAdditionalDiscount,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
