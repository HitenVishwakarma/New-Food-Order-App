import { Modal } from "../UI/Modal";
import "./Cart.css";

const addedItemInCart = [
  {
    id: "c1",
    name: "Sushi",
    amount: "2",
    price: "23.41",
  },
  {
    id: "c2",
    name: "Noodels",
    amount: "2",
    price: "23.41",
  },
  {
    id: "c3",
    name: "Pizza",
    amount: "2",
    price: "23.41",
  },
  {
    id: "c4",
    name: "Pasta",
    amount: "2",
    price: "23.41",
  },
];
export const Cart = () => {
  const cartItems = (
    <ul className="cart-items">
      {addedItemInCart.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>23.51</span>
      </div>
      <div className="actions">
        <button className="button--alt">Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};
