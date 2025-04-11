import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // We are subscribing to the store using Selector

  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="flex justify-between p-2 shadow-xl bg-[#f87a53]">
      <div className="logo-container">
        <Link to="/">
          <img
            className="h-20 shadow-lg rounded-full hover:scale-110 transition-all ease-in-out"
            src={LOGO_URL}
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-6 pt-6 text-lg pr-2">
          <Link to="/">
            <li className="underline hover:scale-110 transition-all ease-in-out">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="underline hover:scale-110 transition-all ease-in-out">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="underline hover:scale-110 transition-all ease-in-out">
              Contact
            </li>
          </Link>
          <li className="border-2 border-black rounded-md px-2">
            Online Status : {!onlineStatus ? "🔴" : "🟢"}
          </li>
          <Link to="/cart">
            <li className="flex items-center px-1 rounded-lg bg-gray-300 hover:scale-110 transition-all ease-in-out border border-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
                className="mr-2"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.68c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.13-.31.13-.48 0-.55-.45-1-1-1H5.21L4.27 2H1v2h2l3.6 7.59-1.35 2.44C5.09 14.37 5 14.68 5 15c0 .55.45 1 1 1h12v-2H7.42l.74-1z" />
              </svg>
              : {cartItems.length} items
            </li>
          </Link>
          <button
            className="px-1 rounded-lg hover:scale-110 transition-all ease-in-out bg-gray-300 border border-black"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="border-2 border-black  rounded-md px-2 bg-amber-300">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
