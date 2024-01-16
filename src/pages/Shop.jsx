import { useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item";

const ItemCard = ({ item, index, cart, setCart }) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="shadow-lg p-2 m-2 w-[200px] flex justify-center items-center flex-col bg-white p-45"
    >
      {/* <Link to={`${item.id}`}> */}
      <img
        className="md:h-[150px] lg:h-[250px] w-[100%] object-contain p-2 rounded-md"
        src={item?.image}
        alt={item?.title}
      />
      <p className="text-center w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        {item?.title}
      </p>
      <p className="font-bold text-center w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
        ${item?.price}
      </p>
      {/* </Link> */}
      <div className="mt-1">
        <button
          className="text-black bg-sky-300 mx-1 px-2 rounded-md active:bg-sky-700"
          onClick={() => {
            if (count > 0) {
              setCount((prev) => prev - 1);
            }
          }}
        >
          -
        </button>
        <input
          type="number"
          value={count}
          onChange={(e) => {
            setCount(parseInt(e.target.value));
          }}
          className="w-9 border rounded-md text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          className="text-black bg-sky-300 mx-1 px-2 rounded-md active:bg-sky-700"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="text-black bg-sky-300 mt-1 mx-1 px-2 rounded-md active:bg-sky-700"
        onClick={() => {
          if (count == 0) {
            return;
          }
          const index = cart.findIndex((i) => i.id == item.id);

          if (index != -1) {
            const newCart = [...cart];
            newCart[index] = {
              ...newCart[index],
              quantity: newCart[index].quantity + count,
            };
            setCart(newCart);
          } else {
            const newCart = [...cart, { ...item, quantity: count }];
            setCart(newCart);
          }

          setCount(0);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Shop = ({ items, cart, setCart }) => {
  return (
    <div className="px-8 py-8 min-h-[100vh]">
      {/* <h1 className="text-4xl">shop</h1> */}
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {items.map((item, index) => {
          return (
            <ItemCard key={item.id} item={item} index={index} cart={cart} setCart={setCart} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
