import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Cart.css'

const Cart = ({ item: { name, img } }) => {

    return (
        <Container>
            <Row className='shadow-sm rounded-pill position-relative p-1 my-1'>
                <Col className='col-2 my-auto'>
                    <img
                        src={img}
                        alt={name}
                        width={60}
                        height={60}
                        className='rounded-circle cart-item-image'
                    /></Col>
                <Col className='col-8 my-auto'>
                    <h5 className='cart-item-title'>{name}</h5>
                </Col>
                <Col className='col-2 my-auto'>
                <FontAwesomeIcon className='delete-button' icon={faTrash} />
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;