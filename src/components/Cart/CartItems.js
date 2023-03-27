import "./CartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";

export const CartItems = (props) => {
  const { items } = useContext(AppContext);
  // const updatedItem = [props].filter((item) => item.id !== items.id);
  // console.log("props", items);
  return (
    <div className="cart-meal">
      <div className="meal-name-price">
        <h3>{props.name}</h3>
        <span className="cart-price">${props.price}</span>
      </div>
      <span className="cart-amount">⨉ {props.amount}</span>
      <FontAwesomeIcon
        onClick={props.onRemove}
        icon={faTrashCan}
        className="delete-icon"
      />
    </div>
  );
};
