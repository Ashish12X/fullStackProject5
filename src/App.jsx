import { useState } from 'react'
import Header from './components/Header';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

function App() {
  const [cart, setCart] = useState([]);
  const products=[
    {
      id:1,
      name:"Laptop",
      Price:50000,
      image:"https://p3-ofp.static.pub//fes/cms/2025/11/03/spb03879hxow8z26wlb9lffipfu5pq315012.png?width=400&height=400"
    },
    {
      id:2,
      name:"Mobile",
      Price:15000,
      image:"https://images-cdn.ubuy.co.in/667b18b7dd54dd238467e075-tracfone-hmd-vibe-64gb-black-prepaid.jpg"
    },
    {
      id:3,
      name:"Laptop",
      Price:55000,
      image:"https://m.media-amazon.com/images/I/412UMSXXm-L._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
      id:4,
      name:"Laptop",
      Price:57000,
      image:"https://static-ecapac.acer.com/media/catalog/product/p/r/predator-helios-neo-16-ai-phn16-73-non-fingerprint-with-backlit-on-wp-ai-logo-abyssal-black-01-custom_nh.qx3si.001.jpeg?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500"
    },
    {
      id:5,
      name:"Mobile",
      Price:41000,
      image:"https://5.imimg.com/data5/SELLER/Default/2022/5/FZ/AR/OQ/138319557/redmi-note-7-4gb-64gb-mobile-phone.jpg"
    }
  ]

  const addToCart=(product)=>{
    setCart([...cart,product]);
  }

  const removeFromCart=(index)=>{
    let arr=cart.filter((_,i)=>i!==index);
    setCart(arr);
  }

  const totalAmount=cart.reduce((total,index)=>total+index.Price,0)

  return (
    <div className="">
      <Header cartCount={cart.length}/>
      <ProductList products={products} addToCart={addToCart}/>
      <Cart cart={cart} removeFromCart={removeFromCart} totalAmount={totalAmount}/>
    </div>
  )
}

export default App
