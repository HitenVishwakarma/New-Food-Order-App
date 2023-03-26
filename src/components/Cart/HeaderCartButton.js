import { useContext, useEffect } from "react";
import { CartIcon } from "../Assets/CartIcon";
import { AppContext } from "../store/AppContext";
import "./HeaderCartButton.css";

export const HeaderCartButton = (props) => {
  const { totalAmount, setShowAndHideCart } = useContext(AppContext);

  return (
    <button className="button" onClick={() => setShowAndHideCart(true)}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalAmount}</span>
    </button>
  );
};
