import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../img/Home.jpg";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Tees", route: "/category/tees" },
    { name: "Jackets", route: null },
    { name: "Caps", route: null },
    { name: "Accessories", route: null },
    { name: "Limited", route: null },
  ];

  return (
    <>
      <div className="px-6 py-10 m-auto mt-2 w-[90%] h-[300px]">
        <div className="bg-cover bg-center text-white text-center py-20 rounded-lg mb-12 h"style={{ backgroundImage:" url('src/img/Home.jpg')" }}>
          <div
            className="relative z-10"
            
          >
            <h1 className="text-4xl font-bold mb-4">F1 Streetwear</h1>
            <p className="mb-6">
              Explore our bold street collection inspired by speed & style.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-white text-black px-6 py-2 rounded font-medium"
            >
              {" "}
              View All
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => cat.route && navigate(cat.route)}
              className={`cursor-pointer border p-4 rounded text-center hover:shadow transition ${
                cat.route ? "bg-blue-100 hover:bg-blue-200" : "bg-gray-100"
              }`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
