export default function ProductCard({ product, addToCart }) {
  return (
    <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={product.image} className="w-full hover:scale-105 transition duration-300 h-50 object-fill" />
      <h4 className="text-lg font-semibold px-4 mt-3">{product.name}</h4>
      <p className="text-purple-600 font-bold px-4 mt-1">₹ {product.Price}</p>
      <button className="w-full mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 font-semibold hover:opacity-90"
      onClick={()=>addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}
