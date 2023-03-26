import { createContext, useReducer } from "react";

const AppContextInitialState = {
  items: [],
  totalAmount: 0,
  showAndHideCart: false,
  addItems: () => {},
  removeitem: () => {},
  setShowAndHideCart: () => {},
  setTotalAmount: () => {},
};

export const AppContext = createContext(AppContextInitialState);

export const AppContextProvider = (props) => {
  const [state, setState] = useReducer(
    (oldState, newState) => ({ ...oldState, ...newState }),
    //initial state
    {
      showAndHideCart: false,
      setShowAndHideCart: (showHide) => {
        setState({ showAndHideCart: showHide });
      },
      totalAmount: 0,
      setTotalAmount: (total) => {
        setState({ totalAmount: total });
      },
      items: [],
      addItems: (item) => {
        setState({ items: item });
      },
    }
  );

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
