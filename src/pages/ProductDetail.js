import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

export const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useData();
  const findProduct = state?.data?.find((item) => item.id.toString() === id);

  return (
    <div className="px-10 pb-6 w-full overflow-y-scroll">
      <h1 className="text-2xl font-semibold bg-slate-300 rounded-md text-center mt-4 p-2">
        {findProduct?.name}
      </h1>
      <div className="flex w-full gap-20 items-center">
        <img
          src={findProduct?.imageUrl}
          alt="product pic"
          className="w-2/5 h-2/5 object-cover my-8"
        />
        <div>
          <p className="text-lg my-2 mt-5">
            <span className="font-bold">Price:</span> {findProduct?.price}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">Stock:</span> {findProduct?.stock}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">Supplier:</span> {findProduct?.supplier}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">Department:</span>{" "}
            {findProduct?.department}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">SKU:</span> {findProduct?.sku}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">Delivered:</span>{" "}
            {findProduct?.delivered}
          </p>
          <p className="text-lg my-2">
            <span className="font-bold">Description:</span>{" "}
            {findProduct?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
