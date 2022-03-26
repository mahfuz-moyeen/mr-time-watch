import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const handleAddToCart = watch => {
    const newCart = [...cart, watch]
    setCart(newCart)
  }

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <div className="header-section">
        <Header></Header>
      </div>
      <div className="main-section">
        <Products className="products-section" products={products} handleAddToCart={handleAddToCart}></Products>
        <Sidebar className="sidebar-section" cart={cart}></Sidebar>
      </div>
    </div>
  );
}

export default App;
