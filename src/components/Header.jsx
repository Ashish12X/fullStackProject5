import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ProductList from "./ProductList";

export default function Header({ cartCount,products,addToCart }) {
  const [val,setVal]=useState("");
  let product=products.filter(e =>(
    e.name.toLowerCase().includes(val.trim().toLowerCase())
  ));
  return (
    <div>
      <div className="h-[8vh] flex items-center justify-between bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-sans">
      <h1 className="ml-5 mt-2 text-4xl font-bold mb-6">React Demo App</h1>
      <div className="">
        <input type="text" className="rounded w-[35vw] h-[5vh] bg-white text-black p-4 pl-10" value={val} onChange={(e)=>setVal(e.target.value)}/>
        <CiSearch className="text-gray-800 w-7 h-7 font-bold absolute top-4" />
      </div>

      <p className="w-30 h-10 flex items-center justify-center rounded-full bg-white text-purple-600 text-3xl font-bold shadow-lg">
        Cart <span  className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">{cartCount}</span>
      </p>
    </div>
    <ProductList products={product} addToCart={addToCart}/>
    </div>
  );
}
