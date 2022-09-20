import {
  getProductsPending,
  getProductsFulfilled,
  getProductsRejected,
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
