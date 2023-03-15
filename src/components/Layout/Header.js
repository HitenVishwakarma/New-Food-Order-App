import { Fragment } from "react";
import mealImage from "../Assets/meals.jpg";
import { HeaderCartButton } from "../Cart/HeaderCartButton";
import "./Header.css";

export const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealImage} />
      </div>
    </Fragment>
  );
};
