const Shop = (props) => {
  return (
    <div className="mx-16 px-8 py-4 min-h-[100vh] bg-yellow-100">
      <h1>shop</h1>
      <button className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700" onClick={() => props.reduceItem()}>Minus --</button>
      <button className="bg-blue-500 m-2 p-2 rounded-md text-white active:bg-blue-700" onClick={() => props.addItem()}>Plus ++</button>
    </div>
  );
};

export default Shop;
