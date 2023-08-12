import React from "react";
import { useNavigate } from "react-router-dom";

export const Department = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-10 h-fit m-10">
      <div className=" bg-slate-100 p-6 px-9 rounded-md shadow-md cursor-pointer active:shadow-sm">
        <h1 className="text-xl font-bold text-center">Kitchen</h1>
      </div>
      <div className=" bg-slate-100 p-6 px-9 rounded-md shadow-md cursor-pointer active:shadow-sm">
        <h1 className="text-xl font-bold text-center">Clothing</h1>
      </div>
      <div className=" bg-slate-100 p-6 px-9 rounded-md shadow-md cursor-pointer active:shadow-sm">
        <h1 className="text-xl font-bold text-center">Toys</h1>
      </div>
    </div>
  );
};
