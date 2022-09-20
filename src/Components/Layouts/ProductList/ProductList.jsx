import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../services/productServices';
import Product from '../Product/Product';
import './productList.scss';

const ProductList = () => {
  const arrProduct = useSelector((state) => state.products.arrProduct);
  const pending = useSelector((state) => state.products.pending);
  const error = useSelector((state) => state.products.error);
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
    <section className="container product-list">
      {pending && <p>Loading...</p>}
      {!pending && error && <p>Error when fetching data from sever</p>}
      {renderProduct()}
    </section>
  );
};

export default ProductList;
