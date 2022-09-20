import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    arrProduct: [],
    pending: false,
    error: false,
    productDetail: {},
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

    getProductDetailFulfille: (state, action) => {
      state.pending = false;
      state.error = false;
      state.productDetail = action.payload.content;
    },
  },
});

export const {
  getProductsPending,
  getProductsFulfilled,
  getProductsRejected,
  getProductDetailFulfille,
} = productSlice.actions;
export default productSlice.reducer;
