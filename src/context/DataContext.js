import { createContext, useContext, useEffect, useReducer } from "react";
import { inventoryData } from "../data/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(inventoryData));
  }, []);

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "SELECT_PROD_DEPT":
        localStorage.setItem("dept", JSON.stringify(action.payload));
        return { ...state, dept: action.payload };

      case "SELECT_LOW_STOCK":
        const changed = !state.lowStock;
        localStorage.setItem("lowStock", JSON.stringify(changed));
        return { ...state, lowStock: changed };

      case "SELECT_PROD_CATG":
        localStorage.setItem("productCatg", JSON.stringify(action.payload));
        return { ...state, productCatg: action.payload };

      case "ADD_NEW_PROD":
        const newUpdatedArr = [...state.data, action.payload];
        localStorage.setItem("data", JSON.stringify(newUpdatedArr));
        return { ...state, data: newUpdatedArr };

      default:
        return state;
    }
  };

  const localStgData = JSON.parse(localStorage.getItem("data"));
  const localStgDept = JSON.parse(localStorage.getItem("dept"));
  const localStgStock = JSON.parse(localStorage.getItem("lowStock"));
  const localStgCatg = JSON.parse(localStorage.getItem("productCatg"));

  const [state, dispatch] = useReducer(reducerFunction, {
    data: localStgData ?? inventoryData,
    dept: localStgDept ?? "All",
    lowStock: localStgStock ? true : false,
    productCatg: localStgCatg ?? "name",
  });

  const deptFilteredData =
    state?.dept !== "All"
      ? state?.data.filter((item) => item?.department === state?.dept)
      : state?.data;

  const lowStockData = state?.lowStock
    ? deptFilteredData.filter((item) => item.stock <= 10)
    : deptFilteredData;

  const filteredData =
    state.productCatg !== "name"
      ? lowStockData?.sort(
          (a, b) => a[state?.productCatg] - b[state?.productCatg]
        )
      : lowStockData?.sort((a, b) => {
          const item1 = a?.name?.toLowerCase();
          const item2 = b?.name?.toLowerCase();

          if (item1 > item2) {
            return 1;
          }
          if (item1 < item2) {
            return -1;
          }
          return 0;
        });

  return (
    <DataContext.Provider value={{ state, dispatch, filteredData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
