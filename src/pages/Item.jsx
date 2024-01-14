import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export const Item = ({ items, cart }) => {
  const { id } = useParams();
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <p>hi from item {id}</p>
      {items.map((item, index) => {
        if (id == item.id) {
          return (
            <div
              key={item.id}
              className="w-[300px] flex justify-center items-center flex-col bg-white p-4"
            >
              {/* <Link to={`${item.id}`}>Link</Link> */}
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
              <div>
                <button
                  className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700"
                  onClick={() => {
                    if (itemCount - 1 <= 0) {
                      setItemCount(0);
                    } else {
                      setItemCount(itemCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="number"
                  value={itemCount}
                  onChange={(e) => setItemCount(parseInt(e.target.value))}
                  className="w-9 border text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700"
                  onClick={() => {
                    setItemCount(itemCount + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="border"
                onClick={() => {
                  const updatedItems = [...items];
                  updatedItems[index].quantity = itemCount;
                  cart.push(updatedItems[index]);
                  setItemCount(0);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        }
      })}
    </>
  );
};
