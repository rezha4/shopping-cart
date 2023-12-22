import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Navbar from "./pages/Navbar";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newCart = [...cart];
    newCart.push(item);
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
  }, []);

  return (
    <>
      <Navbar cart={cart} />
      <Shop addItem={addItem} reduceItem={reduceItem} items={items}/>
    </>
  );
};

export default App;
