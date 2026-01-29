import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/allProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Products load Failed",
      );
    }
  },
);

export const singleProducts = createAsyncThunk(
  "products/singleProducts",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Products load Failed",
      );
    }
  },
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: null,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        ((state.loading = false), (state.products = action.payload));
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
        state.message = action.payload;
      })

      .addCase(singleProducts.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(singleProducts.fulfilled, (state, action) => {
        ((state.loading = false), (state.productDetails = action.payload));
      })
      .addCase(singleProducts.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
        state.message = action.payload;
      });
  },
});

export default productsSlice.reducer;
