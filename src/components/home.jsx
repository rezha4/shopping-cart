import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function NavBar({cart}) {
  return (
    <div className="nav">
      <h3>Cart {cart}</h3>
      <h3>SHOPPING CART</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

function Main() {
  return (
    <>
      <h1>Welcome to Shopping Cart!</h1>
      <h3>You're at Home.</h3>
    </>
  );
}

export { NavBar, Main };
