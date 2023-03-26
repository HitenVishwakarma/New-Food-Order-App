import { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import { Modal } from "../UI/Modal";
import "./Cart.css";

export const Cart = (props) => {
  const { setShowAndHideCart, items } = useContext(AppContext);
  const [newItem, setNewItem] = useState(items);
  console.log("newitem", newItem);
  const cartItems = (
    <ul className="cart-items">
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
  // console.log("cart", cartItems);
  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>{cartItems.amount}</span>
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
