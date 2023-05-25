import React from "react";
import "../assets/css/cart.css";

const Cart = ({ cart_img, cart_heading, cart_description }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={cart_img} alt="image upload soon" />
        </div>
        <div className="flip-card-back">
          <h1>{cart_heading}</h1>
          <p>{cart_description}</p>
          <div className="flip-card-back__link">
            <a href="#" target="_blank" title="Live Demo">
              Demo
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-github" title="See Code"></i> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
