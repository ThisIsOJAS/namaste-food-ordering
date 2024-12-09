import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-2 shadow-xl bg-[#f87a53]">
      <div className="logo-container">
        <Link to="/">
          <img
            className="h-20 shadow-lg border rounded-full hover:scale-110 transition-all ease-in-out"
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
              About Us
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
          <li className="px-1 border border-black rounded-lg bg-gray-300 hover:scale-110 transition-all ease-in-out shadow-md">
            Cart: 0
          </li>
          <button
            className="px-1 border border-black rounded-lg hover:scale-110 transition-all ease-in-out bg-gray-300 shadow-md"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
