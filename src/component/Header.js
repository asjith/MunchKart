import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const isOnline = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between m-3">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">Online Statue:{isOnline ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
