import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlist-slice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
