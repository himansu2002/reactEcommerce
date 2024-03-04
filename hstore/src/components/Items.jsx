import React, { useState } from 'react';
import '/src/css/Items.css';
import productsData from '/src/products.json';

const Items = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (title) => {
    setCartItems([...cartItems, title]);
    console.log(`${title} added to cart`);
  };

  return (
    <div>
      <div className='item'>
        <div className="itemlist">
          {productsData.map((product, index) => (
            <div key={index} id={`items-${product.id}`} className="items">
              <p className='title'>{product.title}</p>
              <img src={product.image} alt={`item ${product.id}`} />
              <button className="cartbutton" onClick={() => handleAddToCart(product.title)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <button id='viewallbtn'>view all products</button>
    </div>
  );
};

export default Items;
