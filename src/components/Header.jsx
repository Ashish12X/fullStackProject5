import React from "react";

export default function Header({ cartCount }) {
  return (
    <div className="h-[8vh] flex items-center justify-between bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-sans">
      <h1 className="text-4xl font-bold mb-6">React Demo App</h1>

      <p className="w-30 h-10 flex items-center justify-center rounded-full bg-white text-purple-600 text-3xl font-bold shadow-lg">
        Cart <span  className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">{cartCount}</span>
      </p>
    </div>
  );
}
