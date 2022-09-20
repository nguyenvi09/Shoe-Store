import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../Components/Layouts/Product/Product';
import { getProductDetail } from '../../redux/apiRequests';
import './detail.scss';

const Detail = () => {
  const productDetail = useSelector((state) => state.products.productDetail);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProductDetail(id, dispatch);
  }, []);

  return (
    <section className="detail">
      <div className="container">
        <div className="detail__container">
          <div className="detail__img">
            <img src={productDetail.image} alt={productDetail.name} />
          </div>
          <div className="detail__info">
            <h1 className="detail__title">{productDetail.name}</h1>
            <p className="detail__desc">{productDetail.description}</p>
            <p>Avaiable size</p>
            <ul className="detail__size">
              {productDetail.size?.map((size) => (
                <li className="detail__size--style" key={size}>
                  {size}
                </li>
              ))}
            </ul>
            <p className="detail__price">{productDetail.price} $</p>
            <div className="detail__quantity">
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
            <button className="detail__btn--add">Add to cart</button>
          </div>
        </div>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '5rem',
            marginBottom: '20px',
          }}
        >
          -Related Products-
        </h1>
        <div className="related__products">
          {productDetail.relatedProducts?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Detail;
