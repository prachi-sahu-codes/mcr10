import React from "react";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const categoryOption = ["Kitchen", "Clothing", "Toys"];
const filterAscend = [
  { id: 1, propName: "Name", propValue: "name" },
  { id: 2, propName: "Price", propValue: "price" },
  { id: 3, propName: "Stock", propValue: "stock" },
];

export const Filters = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">Products</p>
      <select
        className="p-2 border-2 rounded-md"
        value={state.dept}
        onChange={(e) =>
          dispatch({ type: "SELECT_PROD_DEPT", payload: e.target.value })
        }
      >
        <option value="All">All Departments</option>
        {categoryOption.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div onClick={() => dispatch({ type: "SELECT_LOW_STOCK" })}>
        <input id="lowStock" checked={state.lowStock} type="checkbox" />
        <label htmlFor="lowStock" className="pl-2">
          Low Stock Items
        </label>
      </div>
      <select
        className="p-2 border-2 rounded-md"
        value={state.productCatg}
        onChange={(e) =>
          dispatch({ type: "SELECT_PROD_CATG", payload: e.target.value })
        }
      >
        {filterAscend.map(({ id, propName, propValue }) => (
          <option key={id} value={propValue}>
            {propName}
          </option>
        ))}
      </select>

      <button
        className="text-lg pb-1 pt-2 px-5 bg-blue-500 font-bold rounded-md text-white shadow-md hover:bg-blue-600"
        onClick={() => navigate("/newProduct")}
      >
        New
      </button>
    </div>
  );
};
