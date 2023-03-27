import { useContext, useEffect } from "react";
import { CartIcon } from "../Assets/CartIcon";
import { AppContext } from "../store/AppContext";
import "./HeaderCartButton.css";

export const HeaderCartButton = (props) => {
  const { setShowAndHideCart, items } = useContext(AppContext);
  const totalCount = items
    .map((item) => item.amount)
    .reduce((curr, num) => curr + num, 0);

  return (
    <button className="button" onClick={() => setShowAndHideCart(true)}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{totalCount}</span>
    </button>
  );
};
