import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="flex justify-center gap-20 py-6 items-center bg-yellow-400">
      <Link to={"/cart"}>
        <h2 className="text-2xl font-bold">
          Your Cart:{" "}
          {props.cart?.reduce((acc, curr) => {
            return acc + curr.quantity;
          }, 0)}
        </h2>
      </Link>
      <Link to={"/"}>
        <h1 className="text-4xl font-semibold">
          Welcome to Shopping Cart App!
        </h1>
      </Link>
      <Link to={"/shop"}>
        <h2 className="text-2xl font-bold">Go to Shop</h2>
      </Link>
    </div>
  );
};

export default Navbar;
