import React, { useState } from "react";
import { allProducts } from './../data';
import { Link } from 'react-router-dom';


const ProductPage = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6  m-auto mt-2 w-[100%]">
      <h2 className="text-2xl font-bold mb-4">Product Page</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search product..."
        className="border px-4 py-2 w-full max-w-md mb-6"
      />
      {
        filteredProducts.length == 0 ? (
          <p className='text-2xl text-center text-amber-600'>Data is not Found</p>
        ) :
          (<div className="flex justify-center items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[100%]">
              {filteredProducts.map((value) => (
                <div key={value.id} className="border p-4 rounded hover:shadow-md w-[90%]">
                  <img src={value.img} className="w-full h-40 object-cover mb-3 rounded" />
                  <h3 className="text-lg font-semibold">{value.name}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                  <p className="text-black mt-1 font-medium">{value.price}</p>
                  <button className='bg-teal-600 p-1 w-[70px] text-1xl text-amber-50'><Link to={`/products/${value.id}`}>Shop</Link></button>
                </div>
              ))}
            </div>
          </div>)
      }


    </div>
  );
};

export default ProductPage;
