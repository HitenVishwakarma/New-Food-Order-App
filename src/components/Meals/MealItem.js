import { useContext } from "react";
import { AppContext } from "../store/AppContext";
import "./MealItem.css";
import { MealItemForm } from "./MealItemForm";

export const MealItem = (props) => {
  const { addItems, items } = useContext(AppContext);
  const price = `$${props.price.toFixed(2)}`;

  const addCartHandler = (amount) => {
    const newItems = [
      {
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      },
    ];

    const updatedItems = [...items.concat(newItems)];
    addItems(updatedItems);
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddAmount={addCartHandler} />
      </div>
    </li>
  );
};
