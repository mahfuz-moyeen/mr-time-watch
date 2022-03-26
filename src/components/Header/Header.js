import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div id='home' className='container'>
            <h1 className='text-center my-4 header-title'>
                <span>Welcome to </span>
                <span className='band-name'>
                    <span className='text-danger'>Mr </span><span className='time-text'>Time</span>
                </span> 
                <span>Watch Shop</span>
            </h1>
            <h3 className='text-center'>Choose 4 Watch</h3>
        </div>
    );
};

export default Header;