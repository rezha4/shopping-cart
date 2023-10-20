import "./style.css";
import { useEffect, useState } from "react";
import { NavBar } from "./home";

function Cart() {
  const [cart, setCart] = useState([
    {
      count: "LMAO LMFAO",
    }
  ]);

  return (
    <>
    <NavBar cart={cart} />
    </>
  )
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
            <img src={product.image} alt={product.title}></img>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export { Products, Cart };
