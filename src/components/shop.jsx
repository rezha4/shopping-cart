import "./style.css";
import { useEffect, useState } from "react";
import { NavBar } from "./home";
import { useLocation } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([
    {
      count: 7,
    },
  ]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts([...products, ...data]))
      .catch((err) => console.error(err));
  }, []);

  function addToCart(product) {
    const updatedCart = [...cart];
    const { id, title } = product;
    const count = 1;

    const productObject = {
      id,
      title,
      count,
    };

    updatedCart.push(productObject);
    setCart(updatedCart);
    console.log(updatedCart)
  }

  const location = useLocation();

  const isShopRoute = location.pathname === "/shop";

  return (
    <>
      <NavBar cart={cart.length} />
      {isShopRoute && <Products products={products} addToCart={addToCart} />}
    </>
  );
}

function Products({ products, addToCart }) {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <span className="buttons">
              <button>-</button>
              <h4>1</h4>
              <button>+</button>
              <button onClick={addToCart}>Add to Cart</button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export { Products, Cart };
