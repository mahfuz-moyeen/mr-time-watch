import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Cart.css'

const Cart = ({ item: { name, img } }) => {

    return (
        <Container>
            <Row className='shadow rounded-pill'>
                <Col className='column'>
                    <img
                        src={img}
                        alt={name}
                        width={50}
                        height={50}
                        className='rounded-circle cart-item-image'
                    /></Col>
                <Col className='column'>
                    <h5 className='cart-item-title'>{name}</h5>
                </Col>
                <Col className='column'>
                <FontAwesomeIcon icon={faTrash} />
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;