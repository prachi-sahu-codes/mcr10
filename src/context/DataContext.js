import { createContext, useContext, useReducer } from "react";
import { inventoryData } from "../data/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "NEW_DATA":
        return state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFunction, {
    data: inventoryData,
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
