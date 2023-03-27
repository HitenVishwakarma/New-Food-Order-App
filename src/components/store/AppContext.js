import { createContext, useReducer } from "react";

const AppContextInitialState = {
  items: [],
  showAndHideCart: false,
  addItems: () => {},
  removeitem: () => {},
  setShowAndHideCart: () => {},
  setItems: () => {},
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
      items: [],
      addItems: (item) => {
        setState({ items: item });
      },
      setItems: (item) => {
        setState({ items: item });
      },
    }
  );

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};
