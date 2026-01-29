import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        { username, password },
        {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Login Failed"
      );
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    isAuth: false,
    user: null,
    error: null,
    message: null,
  },
  reducers: {
    logout(state) {
      (state.user = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        (state.loading = true),
          (state.user = null),
          (state.error = null);
      })
      .addCase(login.fulfilled, (state, action) => {
        (state.loading = false),
          (state.isAuth = true),
          (state.user = action.payload),
          (state.error = null);
      })
      .addCase(login.rejected, (state, action) => {
        (state.loading = false),
          (state.isAuth = false),
          (state.user = null),
          (state.error = action.payload);
        state.message = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
