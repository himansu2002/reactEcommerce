import React from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Items from '../components/Items';


const LandingPage = () => {
  return ( 
      <div className="app-container">
        <Navbar />
        <Products />
        <Items />
      </div>
  );
};

export default LandingPage;
