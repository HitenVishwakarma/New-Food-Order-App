import { Fragment, useContext, useEffect, useState } from "react";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { AppContext, AppContextProvider } from "./components/store/AppContext";

const App = () => {
  const { showAndHideCart } = useContext(AppContext);

  return (
    <div>
      {showAndHideCart && <Cart />}
      <Header />
      <Meals />
    </div>
  );
};

export default App;
