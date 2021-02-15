import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({user, handleLogout}) => {
  let nav = user ?
    <div>
      <Link to="/products/new">Add New Product</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/products">View Products</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={handleLogout}>
      LOG OUT
      </Link>
    </div>
    :
    <div>
      <Link to="/login" className="NavBar-link">
      LOG IN
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
      SIGN UP
      </Link>
    </div>
    
    return (
      <div className='NavBar'>
        {nav}
      </div>
    )
}

export default NavBar;