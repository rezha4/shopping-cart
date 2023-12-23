import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import "./index.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex(
      (currentItem) => item.id === currentItem.id
    );
    if (itemIndex !== -1) {
      newCart[itemIndex].count += 1;
    } else {
      newCart.push({
        id: item.id,
        title: item.title,
        count: 1,
        price: item.price,
      });
    }
    setCart(newCart);
  };

  const reduceItem = (item) => {
    const itemIndex = cart.findIndex(
      (currentItem) => item.id === currentItem.id
    );
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart[itemIndex].count == 1
        ? newCart.splice(itemIndex, 1)
        : (newCart[itemIndex].count -= 1);
      setCart(newCart);
    }
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
      <Shop addItem={addItem} reduceItem={reduceItem} items={items} />
      <Cart cart={cart} />
    </>
  );
};

export default App;
