import { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import { Modal } from "../UI/Modal";
import "./Cart.css";
import { CartItems } from "./CartItems";

export const Cart = (props) => {
  const { setShowAndHideCart, items } = useContext(AppContext);
  const defaultValue = 0;
  const itemsAmount = items.map((item) => item.price);
  const subTotalAmount = `$${itemsAmount
    .reduce((curr, num) => curr + num, defaultValue)
    .toFixed(2)}`;
  const cartItems = (
    <ul className="cart-items">
      {items.map((item, index) => (
        <CartItems
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>{subTotalAmount}</span>
      </div>
      <div className="actions">
        <button
          className="button--alt"
          onClick={() => setShowAndHideCart(false)}
        >
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};
