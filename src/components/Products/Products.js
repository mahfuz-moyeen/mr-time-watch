import React from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = ({ products, handleAddToCart }) => {
    return (
        <div className='container'>
            <h2 className='text-center my-4 fs-5'>Total products: {products.length}</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </Row>
        </div>
    );
};

export default Products;