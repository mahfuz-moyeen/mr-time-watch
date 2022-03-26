import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { name, price, img, seller } = product
    return (
        <div>
            <Col>
                <CardGroup className='card-section shadow rounded-3 my-3'>
                    <Card>
                        <Card.Img variant="top" className='p-2' src={img} />
                        <Card.Body className='position-relative'>
                            <div>
                                <Card.Title className='mb-auto fs-6'>{name}</Card.Title>
                                <Card.Text>
                                    Seller: {seller}
                                </Card.Text>
                                <Card.Text className='price-title '>
                                    Price: ${price}
                                </Card.Text>

                            </div>
                        </Card.Body>
                        <Card.Footer className='text-center border-top-0 bg-transparent'>
                            <button className='add-cart-button' onClick={() => handleAddToCart(product)}>Add to card 
                            <FontAwesomeIcon icon={faCartPlus} /></button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default Product;