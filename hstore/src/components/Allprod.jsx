import React from 'react';
import productsData from '/src/products.json';
import '../css/Allprod.css';
import Navbar from '../components/Navbar';
import { useCart } from './CartContext';

const ProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <Navbar />
      <div className="products-page">
        {productsData.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

