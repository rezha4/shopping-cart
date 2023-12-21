import { useState } from "react";
import Shop from "./pages/Shop";

const App = () => {
  const [cart, setCart] = useState([]);

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

  return (
    <>
      <h1>hi</h1>
      <p>{cart.length}</p>
      <Shop addItem={addItem} reduceItem={reduceItem} />
    </>
  );
};

export default App;
