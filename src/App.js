import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Menubar from './components/Menubar/Menubar';
import Question from './components/Question/Question';

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  // add to cart
  const handleAddToCart = watch => {
    let newCart = []
    const exists = cart.find(product => product.id === watch.id)
    if (!exists) {
      newCart = [...cart, watch]
    }
    else {
      alert('You all ready add this watch')
      newCart = [...cart]
    }
    if (newCart.length <= 4) {
      setCart(newCart)
    }
    else {
      alert('Oops !!!  You already add 4 watch')
    }
  }
  // load product data from products.json
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div>
      <Menubar></Menubar>
      <Header id='home'></Header>
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
            setCart={setCart}
          ></Sidebar>
        </Col>
      </Row>
      <div className='container my-5' id='question'>
        <h2>Question and Answer</h2>
      <Question></Question>
      </div>
    </div>
  );
}

export default App;
