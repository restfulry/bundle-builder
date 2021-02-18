import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap'

function HomePage() {


  return (
    <div>
      <Link to="/shop" className="NavBar-link">Shop</Link>

      <Link to="/login" className="NavBar-link">Login to My Store</Link>

      <Link to="/signup" className="NavBar-link">STORE SIGN UP</Link>
    </div>
  )

};

export default HomePage;
