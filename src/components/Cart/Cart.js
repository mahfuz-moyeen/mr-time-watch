import React from 'react';
import './Cart.css'

const Cart = ({ item: { name, img } }) => {

    return (
        <div className='d-flex justify-content-evenly'>
            <img 
            src={img} 
            alt={name}
            width={50}
            height={50}
            className='rounded-circle'
            />
            <h5 className='fs-6'>{name}</h5>
        </div>
    );
};

export default Cart;