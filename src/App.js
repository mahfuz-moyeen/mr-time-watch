import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
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
      <Products className="products-section" products={products}></Products>
      <Sidebar className="sidebar-section"></Sidebar>
    </div>
  </div>
);
}

export default App;
