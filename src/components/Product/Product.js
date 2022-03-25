import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './Product.css'

const Product = ({ product: { name, price, img, seller } }) => {
    return (
        <div>
            <Col>
                <CardGroup className='card shadow'>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body className='position-relative'>
                            <div>
                                <Card.Title className='mb-auto fs-5'>{name}</Card.Title>
                                <Card.Text>
                                    Seller: {seller}
                                </Card.Text>
                                <Card.Text className='price-title'>
                                    Price: {price}
                                </Card.Text>

                            </div>
                        </Card.Body>
                        <Card.Footer className='card-footer text-center'>Add to card
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default Product;