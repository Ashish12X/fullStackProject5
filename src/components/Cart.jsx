export default function Cart({ cart, removeFromCart, totalAmount }) {
  return (
    <div className="min-h-screen pt-5 bg-gray-100 p-6">
      <hr />
      <h1 className="text-4xl font-bold pt-5 text-center mb-8 text-purple-600">
        Your Cart
      </h1>
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
        Total Amount : ₹{totalAmount}
      </h1>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
          {cart.map((e, i) => (
            <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden h-81">
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
        <div className="p-2 flex flex-col justify-center items-center">
          <form className="min-h-[70vh] flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-[90%] max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Enter Your Address Details
              </h2>

              <div className="space-y-5">
                <div className="flex flex-col">
                  <label className="mb-1 text-gray-600 font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
          transition duration-200"
                    placeholder="Street address"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-gray-600 font-medium">City</label>
                  <input
                    type="text"
                    className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
          transition duration-200"
                    placeholder="Enter city"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-gray-600 font-medium">
                    State
                  </label>
                  <input
                    type="text"
                    className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
          transition duration-200"
                    placeholder="Enter state"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 text-gray-600 font-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
          transition duration-200"
                    placeholder="Enter country"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg 
        hover:bg-blue-600 active:scale-95 transition duration-200 font-medium"
                >
                  Save Address
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
