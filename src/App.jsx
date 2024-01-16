import { useEffect, useState } from "react";
import Shop from "./pages/Shop";
import Navbar from "./pages/Navbar";
import Cart from "./pages/Cart";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Item } from "./pages/Item";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

const App = () => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddToCart = (item) => {
    const newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/", { mode: "no-cors" })
      .then((res) => {
        if (res.status >= 400) {
          console.error("server error");
        }
        return res.json();
      })
      .then((res) => {
        // const itemsWithQuantity = res.map((item) => ({
        //   ...item,
        //   quantity: 0,
        // }));
        setItems(res);
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
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Navbar cart={cart} />
                <Shop cart={cart} setCart={setCart} handleAddToCart={handleAddToCart} items={items} />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar cart={cart} />
                <Cart cart={cart} setCart={setCart} />
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
