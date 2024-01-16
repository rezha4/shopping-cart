import { Link } from "react-router-dom";
import Shop from "./Shop";
import Cart from "./Cart";

const Home = () => {
  return (
    <div className="px-10 py-10 text-center">
      <p>
        Welcome to Shopping Cart App! It's a mockup E-Commerce web app that are
        built with React JS.
      </p>
      <br />
      <p>
        Go to the shop <Link className="text-sky-500 underline" to={"/shop"}>here</Link>, or go to the cart{" "}
        <Link className="text-sky-500 underline" to={"/cart"}>here</Link>{" "}
      </p>
    </div>
  );
};

export default Home;
