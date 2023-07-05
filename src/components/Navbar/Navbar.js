import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import "./Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart );
  return (
    <div className="navbar">
      <div className="navbar-title">
        <h2>Sepetim</h2>
      </div>
      <div className="basket">
        <p>{quantity}</p>
        <FaShoppingBasket className="basket-icon" />
      </div>
    </div>
  );
};

export default Navbar;
