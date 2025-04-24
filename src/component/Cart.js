import { useDispatch, useSelector } from "react-redux";
import RestaurantAccordianBody from "./RestaurantAccordianBody";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const HandleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center w-6/12 mx-auto my-10">
      <div className="flex justify-between p-2 m-2">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          className="bg-gray-500 py-1 px-4 m-1 rounded-md"
          onClick={HandleClearCart}
        >
          Clear All
        </button>
      </div>
      {cartItems.length === 0 && <h2>The Cart is empty.</h2>}
      <div>
        {cartItems.map((c) => (
          <RestaurantAccordianBody key={c?.card?.info?.id} bodyInfo={c} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
