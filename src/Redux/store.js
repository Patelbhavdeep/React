import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducer/userSlice";
import productsSlice from "../Redux/Reducer/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
  },
});
