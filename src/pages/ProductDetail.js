import React from "react";
import { useParams } from "react-router";
import { useData } from "../context/DataContext";

export const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useData();
  const findProduct = state?.data?.find((item) => item.id.toString() === id);

  return (
    <div className="px-10 py-6 w-full overflow-y-scroll">
      <h1 className="text-2xl font-semibold">{findProduct?.name}</h1>
      <img
        src={findProduct.imageUrl}
        alt="product pic"
        className="w-96 h-96 object-cover my-4"
      />
      <p>Price: {findProduct.price}</p>
    </div>
  );
};
