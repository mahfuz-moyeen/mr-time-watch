import React from 'react';
import Cart from '../Cart/Cart';
import './Sidebar.css'

const Sidebar = ({cart}) => {
    return (
        <div className='selected-watch container'>
            <div className='selected-section p-3 w-100 text-center bg-white shadow'>
                <h2>Selected Watchs</h2>
                <div>
                    {
                        cart.map(item => <Cart 
                            key={item.id} 
                            item={item}
                            ></Cart>)
                    }
                </div>
                <div className='d-flex flex-column gap-2 w-75 mx-auto my-3'>
                    <button className='btn btn-outline-success'>Choose 1 for me</button>
                    <button className='btn btn-outline-danger'>Choose again</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;