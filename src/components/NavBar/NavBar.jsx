import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({user, handleLogout}) => {
  let nav = user ?
    <div>
      <h3>{user.storeName}</h3>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/bundles">My Bundles</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/products">My Products</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="" className="NavBar-link" onClick={handleLogout}>
      LOG OUT
      </Link>
    </div>
    :
    <div>
      <Link to="/login" className="NavBar-link">
      My Store
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link">
      STORE SIGN UP
      </Link>
    </div>
    
    return (
      <div className='NavBar'>
        {nav}
      </div>
    )
}

export default NavBar;