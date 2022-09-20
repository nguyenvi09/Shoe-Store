import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__item">
          <h1 className="footer__title">get help</h1>
          <ul>
            <li>Contact us</li>
            <li>Shopping</li>
            <li>NIKEiD</li>
            <li>Nike+</li>
          </ul>
        </div>
        <div className="footer__item">
          <h1 className="footer__title">orders</h1>
          <ul>
            <li>Payment options</li>
            <li>Shipping and delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="footer__item">
          <h1 className="footer__title">register</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus accusantium veritatis id maxime modi.
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="footer__item">
          <h1 className="footer__title">email sign up</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <a href="#">Sign up now</a>
        </div>
        <div className="footer__item">
          <h1 className="footer__title">stores near you</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <a href="#">View cards</a>
        </div>
        <div className="footer__item">
          <h1 className="footer__title">stores near you</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <a href="#">Search</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
