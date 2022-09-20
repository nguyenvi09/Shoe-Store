import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../redux/apiRequests';
import Product from '../Product/Product';
import './productList.scss';

const ProductList = () => {
  const arrProduct = useSelector((state) => state.products.arrProduct);
  console.log(arrProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  const renderProduct = () => {
    return arrProduct?.slice(10).map((product) => {
      return <Product key={product.id} product={product} />;
    });
  };

  return (
    <section className="container product-list">{renderProduct()}</section>
  );
};

export default ProductList;
