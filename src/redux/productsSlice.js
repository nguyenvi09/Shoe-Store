import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    arrProduct: [],
    pending: false,
    error: false,
  },
  reducers: {
    getProductsPending: (state) => {
      state.pending = true;
    },
    getProductsFulfilled: (state, action) => {
      state.pending = false;
      state.error = false;
      state.arrProduct = action.payload.content;
    },
    getProductsRejected: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { getProductsPending, getProductsFulfilled, getProductsRejected } =
  productSlice.actions;
export default productSlice.reducer;
