import React from 'react';
import Cart from '../Cart/Cart';
import './Sidebar.css'

const Sidebar = ({ cart, setCart }) => {
    // selected random watch
    const randomWatch = cart => {
        const random = Math.floor(Math.random() * cart.length)
        const selectCart = [cart[random]]
        setCart(selectCart);
    }
    // remove all cart item
    const removeAll = () => {
        setCart([]);
    }
    return (
        <div className='selected-watch container' id='selected-watch'>
            <div className='selected-section p-3 w-100 text-center bg-white shadow'>
                <h2>Selected Watch</h2>
                <div>
                    {
                        cart.map(item => <Cart
                            key={item.id}
                            item={item}
                        ></Cart>)
                    }
                </div>
                <div className='d-flex flex-column gap-2 w-75 mx-auto my-3'>
                    <button
                        onClick={() => randomWatch(cart)}
                        className='btn btn-outline-success'
                    >Choose 1 for me</button>
                    <button
                        onClick={removeAll}
                        className='btn btn-outline-danger'
                    >Remove all</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;