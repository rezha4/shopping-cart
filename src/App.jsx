import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Item } from "./pages/Item";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddToCart = (item) => {
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  }

  const handleIncrement = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += 1;
    setItems(updatedItems);
  };

  const handleDecrement = (index) => {
    const updatedItems = [...items];
    if (updatedItems[index].quantity <= 0) {
      return;
    } else {
      updatedItems[index].quantity -= 1;
      setItems(updatedItems);
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
      .then((res) => {
        const itemsWithQuantity = res.map((item) => ({
          ...item,
          quantity: 0,
        }));
        setItems(itemsWithQuantity);
      })
      .catch((err) => console.error(err)).finally(() => console.log(items));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar cart={cart} />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Navbar cart={cart} />
                <Shop cart={cart} handleAddToCart={handleAddToCart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} items={items} />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar cart={cart} />
                <Cart cart={cart} />
              </>
            }
          />
          {/* <Route
            path="/shop/:id"
            element={
              <>
                <Navbar cart={cart} />
                <Item cart={cart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} items={items} />
              </>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
