import React from "react";
import { useData } from "../context/DataContext";

export const Home = () => {
  const { state } = useData();
  const calcTotalStock = state?.data?.reduce(
    (acc, curr) => acc + Number(curr.stock),
    0
  );
  const calcDelivered = state?.data?.reduce(
    (acc, curr) => acc + Number(curr.delivered),
    0
  );
  const calcLowStock = state?.data?.reduce(
    (acc, curr) => (curr.stock <= 10 ? (acc += 1) : acc),
    0
  );

  return (
    <div className="flex gap-10 h-fit m-10">
      <div className=" bg-slate-100 p-4 px-8 rounded-md shadow-md ">
        <h1 className="text-2xl font-bold text-green-600 text-center pb-2">
          {calcTotalStock}
        </h1>
        <p className="font-semibold">Total Stock</p>
      </div>
      <div className=" bg-slate-100 p-4 px-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-yellow-500 text-center pb-2">
          {calcDelivered}
        </h1>
        <p className="font-semibold">Total Delivered</p>
      </div>
      <div className=" bg-slate-100 p-4 px-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-red-700 text-center pb-2">
          {calcLowStock}
        </h1>
        <p className="font-semibold">Low Stock Items</p>
      </div>
    </div>
  );
};
