import React from "react";
import { useData } from "../context/DataContext";
import { Filters } from "../components/Filters";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const { filteredData } = useData();
  const navigate = useNavigate();

  return (
    <div className="px-10 py-6 w-full overflow-y-scroll">
      <Filters />
      {filteredData.length > 0 ? (
        <table className="border-2 mt-4">
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Image</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Supplier</th>
          </tr>
          {filteredData.map((item) => (
            <tr
              key={item.id}
              className="border-2 cursor-pointer hover:bg-slate-100"
              onClick={() => navigate(`/productDetail/${item.id}`)}
            >
              <td className="p-2">
                <img
                  src={item.imageUrl}
                  alt={`${item.name} pic`}
                  className="w-48 h-48 object-cover"
                />
              </td>
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.description}</td>
              <td className="p-2 w-28 text-center">{item.price}</td>
              <td className="p-2 w-28 text-center">{item.stock}</td>
              <td className="p-2">{item.supplier}</td>
            </tr>
          ))}
        </table>
      ) : (
        <div className="div-center text-xl font-bold">No Products Found</div>
      )}
    </div>
  );
};
