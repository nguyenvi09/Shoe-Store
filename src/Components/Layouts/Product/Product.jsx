import React from 'react';
import './product.scss';

const Product = ({ product }) => {
  return (
    <section className="card">
      <img className="card__img" src={product.image} alt={product.name} />
      <h1 className="card__name">{product.name}</h1>
      <div className="card__desc">{product.description}</div>
      <div className="card__footer">
        <div className="card__btn">Buy now</div>
        <div className="card__price">{product.price}$</div>
      </div>
    </section>
  );
};

export default Product;
