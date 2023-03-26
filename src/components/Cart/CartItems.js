import "./CartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export const CartItems = (props) => {
  return (
    <div className="cart-meal">
      <div className="meal-name-price">
        <h3>{props.name}</h3>
        <span className="cart-price">${props.price}</span>
      </div>
      <span className="cart-amount">⨉ {props.amount}</span>
      <FontAwesomeIcon icon={faTrashCan} />
    </div>
  );
};
