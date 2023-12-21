import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Navbar from "./pages/Navbar";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newCart = [...cart];
    newCart.push({});
    setCart(newCart);
    console.log(cart);
  };

  const reduceItem = () => {
    const newCart = [...cart];
    if (newCart.length > 0) {
      newCart.pop();
    }
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          console.error("server error");
        }
        return res.json();
      })
      .then((res) => setItems(res))
      .catch((err) => console.error(err));

    console.log(items)
  }, [cart]);

  return (
    <>
      <Navbar cart={cart} />
      <h1>{items[0]?.title}</h1>
      <img className="w-[200px] h-[250px]" src={items[0]?.image} alt={items[0]?.title} />
      <Shop addItem={addItem} reduceItem={reduceItem} />
    </>
  );
};

export default App;
