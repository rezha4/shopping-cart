const Cart = (props) => {
  return (
    <div className="flex items-center">
      {props.cart.map((cartItem, index) => (
        <div
          key={index}
          className="w-[300px] flex justify-center items-center flex-col bg-white p-4 text-center gap-2"
        >
          <img
            className="w-[200px] h-[250px]"
            src={cartItem?.image}
            alt={cartItem?.title}
          />
          <p className="font-bold">{cartItem?.title}</p>
          <div className="flex gap-8 items-center">
            <p>Quantity: {cartItem?.quantity}</p>
            <p>Price: {cartItem?.price}</p>
          </div>
          <p>Total Price: {cartItem?.quantity * cartItem.price}</p>
        </div>
      ))}
      <main>
        <p>
          Total Price:{" "}
          {props.cart.reduce((acc, current) => {
            return acc + current.price * current.quantity;
          }, 0)}
        </p>
        <button onClick={() => console.log(props.cart)}>Checkout</button>
      </main>
    </div>
  );
};

export default Cart;
