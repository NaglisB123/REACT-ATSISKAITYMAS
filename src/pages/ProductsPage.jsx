import React from "react";
import product1Image from "../images/product1.jpg";
import product2Image from "../images/product2.jpg";
import product3Image from "../images/product3.jpg";
import product4Image from "../images/product4.jpg";

const products = [
  {
    id: 1,
    name: "Oakwood table",
    price: "$150.00",
    image: product1Image,
  },
  {
    id: 2,
    name: "Wall lamp",
    price: "$70.00",
    image: product2Image,
  },
  {
    id: 3,
    name: "Barrel rounded table",
    price: "$350.00",
    image: product3Image,
  },
  {
    id: 4,
    name: "Rosewood bar chair",
    price: "$75.00",
    image: product4Image,
  },
  {
    id: 1,
    name: "Oakwood table",
    price: "$150.00",
    image: product1Image,
  },
  {
    id: 2,
    name: "Wall lamp",
    price: "$70.00",
    image: product2Image,
  },
  {
    id: 3,
    name: "Barrel rounded table",
    price: "$350.00",
    image: product3Image,
  },
  {
    id: 4,
    name: "Rosewood bar chair",
    price: "$75.00",
    image: product4Image,
  },
  {
    id: 1,
    name: "Oakwood table",
    price: "$150.00",
    image: product1Image,
  },
  {
    id: 2,
    name: "Wall lamp",
    price: "$70.00",
    image: product2Image,
  },
  {
    id: 3,
    name: "Barrel rounded table",
    price: "$350.00",
    image: product3Image,
  },
  {
    id: 4,
    name: "Rosewood bar chair",
    price: "$75.00",
    image: product4Image,
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-60 object-cover"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
