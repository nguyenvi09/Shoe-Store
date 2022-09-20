import { DOMAIN } from '../ultil/settings/config';
import axios from 'axios';
import {
  getProductsPending,
  getProductsRejected,
  getProductsFulfilled,
  getProductDetailFulfille,
} from './../redux/productsSlice';

export const getProducts = async (dispatch) => {
  dispatch(getProductsPending());
  try {
    const res = await axios.get(`${DOMAIN}api/Product`);
    dispatch(getProductsFulfilled(res.data));
  } catch (err) {
    dispatch(getProductsRejected());
  }
};

export const getProductDetail = async (id, dispatch) => {
  dispatch(getProductsPending());
  try {
    const res = await axios.get(`${DOMAIN}api/Product/getbyid?id=${id}`);
    dispatch(getProductDetailFulfille(res.data));
  } catch (err) {
    dispatch(getProductsRejected());
  }
};
