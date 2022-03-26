import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import './Cart.css'

const Cart = ({ item: { name, img } }) => {

    return (
        <Container>
            <div className='shadow-sm rounded-pill position-relative p-1 my-1 selected-items'>
                <div className=' my-auto'>
                    <img
                        src={img}
                        alt={name}
                        width={60}
                        height={60}
                        className='rounded-circle cart-item-image'
                    /></div>
                <div className='my-auto'>
                    <h5 className='cart-item-title'>{name}</h5>
                </div>
                <div className=' my-auto'>
                <FontAwesomeIcon className='delete-button' icon={faTrash} />
                </div>
            </div>
        </Container>
    );
};

export default Cart;