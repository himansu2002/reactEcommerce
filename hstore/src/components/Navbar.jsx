import React, { useState } from "react";
import "/src/css/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <h3>HSTORE</h3>
      <ul className={clicked ? "navb active" : "navb"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
        <Link to="/cart" onClick={handleClick}>Cart</Link>
        </li>
        <li>
        <Link to="/contact" onClick={handleClick}>Contact</Link>
        </li>
        <li>
        <Link to="/auth" onClick={handleClick}>Signin/signup</Link>
        </li>
      </ul>
      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar
