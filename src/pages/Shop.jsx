const Shop = (props) => {
  return (
    <>
      <h1>shop</h1>
      <button onClick={() => props.reduceItem()}>Minus --</button>
      <button onClick={() => props.addItem()}>Plus ++</button>
    </>
  );
};

export default Shop;
