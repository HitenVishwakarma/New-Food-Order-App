import { useContext, useRef } from "react";
import { AppContext } from "../store/AppContext";
import { Input } from "../UI/Input";
import "./MealItemForm.css";
export const MealItemForm = (props) => {
  const inputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddAmount(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button className="form-button">+ Add</button>
    </form>
  );
};
