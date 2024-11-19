// src/redux/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: string;
  image: string;
  description: string;
  price: number;
}

interface WishlistState {
  items: Item[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addItem, updateItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
