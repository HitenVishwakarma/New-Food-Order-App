import { Input } from "../UI/Input";
import "./MealItemForm.css";
export const MealItemForm = (props) => {
  return (
    <form className="form">
      <Input
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
