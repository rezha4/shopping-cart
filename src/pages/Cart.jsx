const Cart = (props) => {
  return (
    <>
      <h1>cart</h1>
      {props.cart.map((cartItem, index) => (
        <div key={index}>
            <p>{cartItem.id}</p>
          <h1>{cartItem.title}</h1>
          <p>{cartItem.count}</p>
          <p>{cartItem.price}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
