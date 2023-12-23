const Shop = (props) => {
  return (
    <div className="mx-16 px-8 py-4 min-h-[100vh] bg-yellow-100">
      <h1 className="text-4xl">shop</h1>
      <div className="flex flex-wrap">
        {props.items.map((item) => {
          return (
            <div key={item.id} className="max-w-[300px]">
              <h1>{item?.title}</h1>
              <img
                className="w-[200px] h-[250px]"
                src={item?.image}
                alt={item?.title}
              />

              <button
                className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700"
                onClick={() => props.reduceItem(item)}
              >
                Minus --
              </button>
              <button
                className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700"
                onClick={() => props.addItem(item)}
              >
                Plus ++
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
