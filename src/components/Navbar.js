import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <nav>
       <div className="container navbar">
       <div className="logo"> <span>AK</span><span>STORE</span></div>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
        </div>
        <span className="cart">Cart Item : <span className="cartCount">{cartItems.length}</span></span>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
