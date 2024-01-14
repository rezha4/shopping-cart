import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const copyItems = [...props.items];
  const [items, setItems] = useState(copyItems);

  return (
    <div className="mx-16 px-8 py-4 min-h-[100vh]">
      <h1 className="text-4xl">shop</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {items.map((item, index) => {
          return (
            <div
              key={item.id}
              className="w-[300px] flex justify-center items-center flex-col bg-white p-45"
            >
              {/* <Link to={`${item.id}`}> */}
              <img
                className="w-[200px] h-[250px]"
                src={item?.image}
                alt={item?.title}
              />
              <p className="text-center w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                {item?.title}
              </p>
              <p className="text-center w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">
                ${item?.price}
              </p>
              {/* </Link> */}
              <div>
                <button
                  className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700"
                  onClick={() => props.handleDecrement(index)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => {
                    const updatedItems = [...items];
                    updatedItems[index].quantity = parseInt(e.target.value);
                    setItems(updatedItems);
                  }}
                  className="w-9 border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700"
                  onClick={() => props.handleIncrement(index)}
                >
                  +
                </button>
              </div>
              <button
                className="border"
                onClick={() => {
                  props.handleAddToCart(item);
                  const updatedItems = [...items];
                  updatedItems[index].quantity = 0;
                  setItems(updatedItems);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
