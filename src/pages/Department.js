import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

export const Department = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();
  return (
    <div className="flex gap-10 h-fit m-10">
      <div
        className=" bg-slate-100 hover:bg-slate-200 p-6 px-9 rounded-md shadow-md cursor-pointer active:shadow-sm"
        onClick={() => {
          dispatch({ type: "SELECT_PROD_DEPT", payload: "Kitchen" });
          navigate("/products");
        }}
      >
        <h1 className="text-xl font-bold text-center">Kitchen</h1>
      </div>
      <div
        className=" bg-slate-100 hover:bg-slate-200 p-6 px-9 rounded-md shadow-md cursor-pointer active:shadow-sm"
        onClick={() => {
          dispatch({ type: "SELECT_PROD_DEPT", payload: "Clothing" });
          navigate("/products");
        }}
      >
        <h1 className="text-xl font-bold text-center">Clothing</h1>
      </div>
      <div
        className=" bg-slate-100 hover:bg-slate-200 p-6 px-9 rounded-md shadow-md cursor-pointer active:shadow-sm"
        onClick={() => {
          dispatch({ type: "SELECT_PROD_DEPT", payload: "Toys" });
          navigate("/products");
        }}
      >
        <h1 className="text-xl font-bold text-center">Toys</h1>
      </div>
    </div>
  );
};
