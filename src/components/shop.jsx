import "./style.css";
import { useEffect, useState } from "react";
import { NavBar } from "./home";

function Cart() {
  const [cart, setCart] = useState([
    {
      count: 7,
    },
  ]);

  return (
    <>
      <NavBar cart={cart.length} />
    </>
  );
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts([...products, ...data]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <span className="buttons">
              <button>-</button>
              <h4>0</h4>
              <button>+</button>
              <button>Add to Cart</button>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export { Products, Cart };
