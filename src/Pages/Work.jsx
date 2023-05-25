import React from "react";
import Cart from "../components/Cart";
import "../assets/css/work.css";
import portfolio from "../assets/images/project1.png";

const Work = () => {
  return (
    <div className="work">
      <Cart
        cart_img={portfolio}
        cart_heading="My Portfolio"
        cart_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            blanditiis cupiditate odit distinctio quibusdam molestias ex quae
            temporibus autem quod, culpa perferendis nesciunt dignissimos
            aspernatur, aut repellendus, velit eos tempora."
      />
      <Cart
        cart_img={portfolio}
        cart_heading="My Portfolio"
        cart_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            blanditiis cupiditate odit distinctio quibusdam molestias ex quae
            temporibus autem quod, culpa perferendis nesciunt dignissimos
            aspernatur, aut repellendus, velit eos tempora."
      />
      <Cart
        cart_img={portfolio}
        cart_heading="My Portfolio"
        cart_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            blanditiis cupiditate odit distinctio quibusdam molestias ex quae
            temporibus autem quod, culpa perferendis nesciunt dignissimos
            aspernatur, aut repellendus, velit eos tempora."
      />
    </div>
  );
};

export default Work;
