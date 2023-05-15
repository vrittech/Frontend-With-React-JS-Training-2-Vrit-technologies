import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../pages/ProductsPage/productSlice';

export const store = configureStore({
   reducer: {
      ProductReducer
   }
})