import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useData } from "../context/DataContext";

const categoryOption = ["Kitchen", "Clothing", "Toys"];

export const NewProduct = () => {
  const { dispatch } = useData();
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });

  const submitHandler = () => {
    if (
      formData.department &&
      formData.name &&
      formData.description &&
      formData.price &&
      formData.stock &&
      formData.supplier &&
      formData.imageUrl
    ) {
      const newId = uuid();
      dispatch({ type: "ADD_NEW_PROD", payload: { id: newId, ...formData } });
      setFormData({
        department: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        sku: "",
        supplier: "",
        delivered: 0,
        imageUrl: "",
      });
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="px-10 py-6 w-full overflow-y-scroll">
      <h1 className="text-2xl font-semibold">Add New Product</h1>
      <div className="my-4">
        <label htmlFor="department" className="block text-lg text-gray-500">
          Department
        </label>
        <select
          className="p-2 border-2 rounded-md w-3/4"
          value={formData.department}
          id="department"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, department: e.target.value }))
          }
        >
          <option value="" disabled selected>
            Select Department
          </option>
          {categoryOption.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="my-4">
        <label htmlFor="name" className="block text-lg text-gray-500">
          Name
        </label>
        <input
          id="name"
          value={formData.name}
          type="text"
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="description" className="block text-lg text-gray-500">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          rows="3"
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="price" className="block text-lg text-gray-500">
          Price
        </label>
        <input
          id="price"
          type="number"
          value={formData.price}
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, price: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="stock" className="block text-lg text-gray-500">
          Stocks
        </label>
        <input
          id="stock"
          type="number"
          value={formData.stock}
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, stock: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="sku" className="block text-lg text-gray-500">
          SKU
        </label>
        <input
          id="sku"
          type="text"
          value={formData.sku}
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, sku: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="supplier" className="block text-lg text-gray-500">
          Supplier
        </label>
        <input
          id="supplier"
          value={formData.supplier}
          type="text"
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, supplier: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="delivered" className="block text-lg text-gray-500">
          Delivered
        </label>
        <input
          id="delivered"
          type="number"
          value={formData.delivered}
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, delivered: e.target.value }))
          }
        />
      </div>

      <div className="my-4">
        <label htmlFor="imageUrl" className="block text-lg text-gray-500">
          Image URL
        </label>
        <input
          id="imageUrl"
          type="url"
          value={formData.imageUrl}
          className="py-1 px-2 border-2 rounded-md w-3/4"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))
          }
        />
      </div>

      <button
        className="text-lg pb-1 pt-2 px-5 bg-blue-500 font-bold rounded-md text-white shadow-md hover:bg-blue-600 w-3/4 mt-5"
        onClick={() => submitHandler()}
      >
        Add Product
      </button>
    </div>
  );
};
