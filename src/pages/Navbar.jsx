import { useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="flex justify-around items-center text-center px-4 gap-2 py-6 bg-sky-300 shadow-md">
      <Link to={"/shop"}>
        <h2 className="text-xs md:text-2xl font-bold">Shop</h2>
      </Link>
      <Link to={"/"}>
        <h1 className="text-s md:text-4xl font-semibold">
        Shopping Cart App!
        </h1>
      </Link>
      <Link to={"/cart"}>
        <h2 className="text-xs md:text-2xl font-bold">
          Cart:{" "}
          {props.cart?.reduce((acc, curr) => {
            return acc + curr.quantity;
          }, 0)}
        </h2>
      </Link>
    </div>
  );
};

export default Navbar;
