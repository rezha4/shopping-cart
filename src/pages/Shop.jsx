import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = (props) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="mx-16 px-8 py-4 min-h-[100vh]">
      <h1 className="text-4xl">shop</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {props.items.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[300px] flex justify-center items-center flex-col bg-white p-4"
            >
              <Link to={`${item.id}`}>Link</Link>
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
                  props.addItem(item, itemCount);
                  setItemCount(0);
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
