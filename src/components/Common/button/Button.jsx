import React from "react";
import "./button.css";
import { FaCartShopping } from "react-icons/fa6";
const Button = () => {
  return (
    <>
      <button className="Btn">
        <FaCartShopping  className="icon"/>
        Add to cart
      </button>
    </>
  );
};

export default Button;
