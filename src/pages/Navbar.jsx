const Navbar = (props) => {
  return (
    <div className="flex justify-center gap-20 py-6 items-center bg-yellow-400">
      <h2 className="text-2xl font-bold">Your Cart: {props.cart.length}</h2>
      <h1 className="text-4xl font-semibold">Welcome to Shopping Cart App!</h1>
      <h2 className="text-2xl font-bold">Go to Shop</h2>
    </div>
  );
};

export default Navbar;
