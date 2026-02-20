export default function Cart({ cart, removeFromCart,totalAmount }) {
  return (
    <div className="min-h-screen pt-5 bg-gray-100 p-6">
      <hr />
      <h1 className="text-4xl font-bold pt-5 text-center mb-8 text-purple-600">
        Your Cart
      </h1>
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
        Total Amount : ₹{totalAmount}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cart.map((e,i) => (
          <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={e.image}
              className="w-full hover:scale-105 transition duration-300 h-50 object-fill"
            />
            <h4 className="text-lg font-semibold px-4 mt-3">{e.name}</h4>
            <p className="text-purple-600 font-bold px-4 mt-1">₹ {e.Price}</p>
            <button
              className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 font-semibold hover:opacity-90"
              onClick={() => removeFromCart(i)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
