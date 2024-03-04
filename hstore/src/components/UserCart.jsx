import React from 'react';
import { useCart } from './CartContext';
import '../css/UserCart.css';
import Navbar from '../components/Navbar';

const UserCart = () => {
    const { cartItems, removeFromCart } = useCart();

    return (
        <div>
            <Navbar/>
        <div>
            {cartItems && cartItems.map((item, index) => (
                <div key={index} className='cart-section'>
                    <div className='cart-image'>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className='cart-details'>
                        <h3>{item.title}</h3>
                        <h2>${item.price}</h2>
                        <button className='remove-button' onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
    );
};

export default UserCart;
