import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/css/Items.css';
import productsData from '/src/products.json';
import { useCart } from './CartContext';

const Items = () => {
 
  const { addToCart } = useCart();

  

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <div className='item'>
        <div className="itemlist">
          {productsData.map((product, index) => (
            <div key={index} id={`items-${product.id}`} className="items">
              <p className='title'>{product.title}</p>
              <img src={product.image} alt={`item ${product.id}`} />
              <button className="cartbutton" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Link to="/Allprod">
      <button id='viewallbtn'>view all products</button>
      </Link>
    </div>
  );
};

export default Items;
