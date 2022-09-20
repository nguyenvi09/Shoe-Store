import {
  getProductsPending,
  getProductsFulfilled,
  getProductsRejected,
  getProductDetailFulfille,
} from './productsSlice';
import axios from 'axios';

export const getProducts = async (dispatch) => {
  dispatch(getProductsPending());
  try {
    const res = await axios.get('https://shop.cyberlearn.vn/api/Product');
    dispatch(getProductsFulfilled(res.data));
  } catch (err) {
    dispatch(getProductsRejected());
  }
};

export const getProductDetail = async (id, dispatch) => {
  dispatch(getProductsPending());
  try {
    const res = await axios.get(
      `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    );
    dispatch(getProductDetailFulfille(res.data));
  } catch (err) {
    dispatch(getProductsRejected());
  }
};
