import { useState } from "react";

const Cart = (props) => {
  const [render, setRender] = useState(true);

  return (
    <div className="flex flex-col items-center mt-2">
      {props.cart.map((cartItem, index) => (
        <div className="flex flex-wrap items-center" key={cartItem.id}>
          <p>
            <span className="mx-2">{index + 1}.</span>
            {cartItem.title}{" "}
            <span className="mx-2">Quantity: {cartItem?.quantity}</span>
            <span className="mx-2">Price: ${cartItem?.price}</span>
          </p>
          <button
            className="bg-rose-500 m-2 p-2 rounded-md text-white active:bg-rose-700"
            onClick={() => {
              const cartCopy = [...props.cart];
              const index = cartCopy.findIndex((i) => i.id == cartItem.id);
              cartCopy.splice(index, 1);
              props.setCart(cartCopy);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      {props.cart.length != 0 ? <main className="flex justify-center items-center m-2">
        <p className="font-bold text-xl">
          Total Price: $
          {props.cart.reduce((acc, current) => {
            return acc + current.price * current.quantity;
          }, 0)}
        </p>
        <button
          className="bg-sky-300 m-2 p-2 rounded-md text-black active:bg-sky-700"
          onClick={() => window.location.href = "https://m.youtube.com/watch?v=q6EoRBvdVPQ&list=PLbALbm1g5VzAqShkgKwo0NIVkwV9bZE8t&index=1&pp=iAQB"}
        >
          Checkout
        </button>
      </main> : 
      <main>
        <p>No item in cart!</p></main>}
    </div>
  );
};

export default Cart;
