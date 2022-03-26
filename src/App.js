import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const handleAddToCart = watch => {
    let newCart =[]
    const exists = cart.find(product => product.id === watch.id)
    if (!exists) {
      newCart = [...cart, watch]
    }
    else{
      alert('You all ready add this watch')
      newCart= [...cart]
    }
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
      <Row className='mx-0'>
        <Col xs={12} lg={8} className='order-last order-lg-first'>
          <Products className="products-section"
            products={products}
            handleAddToCart={handleAddToCart}
          ></Products>
        </Col>
        <Col xs={12} lg={4} className='order-first order-lg-last'>
          <Sidebar className="sidebar-section"
            cart={cart}
            setCart ={setCart}
          ></Sidebar>
        </Col>
      </Row>
    </div>
  );
}

export default App;
