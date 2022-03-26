import React from 'react';
import Cart from '../Cart/Cart';
import './Sidebar.css'

const Sidebar = ({ cart, setCart }) => {
    // selected random watch
    const randomWatch = cart => {
        if (cart.length) {
            const random = Math.floor(Math.random() * cart.length)
            const selectCart = [cart[random]]
            setCart(selectCart);
        }
        else{
            alert('First choose 4 watch')
        }
    }
    // remove all cart item
    const removeAll = () => {
        setCart([]);
    }
    // remove one cart item
    const removeItem= removeItem =>{
        let removeCart = []
        removeCart = cart.filter(item=> item.id !== removeItem.id)
        setCart(removeCart)
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
                            removeItem={removeItem}
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