import { useSelector, useDispatch } from "react-redux";
import CategoryFood from "./CategoryFood";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // console.log("aaja bhai", cartItems[0]);

  return (
    <div className="text-center m-5 p-5 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="flex flex-col pl-72 mr-72">
        {cartItems?.map((item) => {
          return (
            <CategoryFood
              khana={item}
              key={item?.card?.info?.id}
              isCart={true}
            />
          );
        })}
        {cartItems.length == 0 && <h1>Your cart is empty, buy some food !!</h1>}
      </div>
    </div>
  );
};

export default Cart;
