// src/Cart.jsx
import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/Cartnone";
import CartItem from "./cart/Cartproduct";
import { Link } from "react-router-dom";

const Cart = ({ closeCart }) => {
  return (
    <div className="   w-full h-full opacity-100 z-[250] bg-slate-600 ">
      <div className="backdrop-blur-sm bg-red/30 h-screen max-w-xl w-full border absolute right-0 ">
        <CartCount closeCart={closeCart} />
        <CartEmpty />
        <CartItem />
        <Link to="/checkout">
        <button type="button" className="bg-black rounded-sm max-w-25 text-white">
        Check Out
      </button>
      </Link>
      </div>
     
    </div>
  );
};

export default Cart;
