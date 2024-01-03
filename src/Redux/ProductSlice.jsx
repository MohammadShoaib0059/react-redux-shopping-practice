import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const getproducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

const initialState = {
  data: [],
  filter_data: [],
};
const ProductsSlicer = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getproducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getproducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getproducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    Filtered_Product(state, action) {
      const price = action.payload;
      if (price === "all") {
        state.filter_data = state.data;
      } else {
        state.filter_data = state.data.filter(
          (product) => product.price === price
        );
      }
    },
  },
});

export const { Filtered_Product } = ProductsSlicer.actions;
export default ProductsSlicer.reducer;
