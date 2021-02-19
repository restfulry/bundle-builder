import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = ({user, handleLogout}) => {
  let nav = user ?
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><div className="navBrand">{user.name}</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item>
                <Link to={{pathname: "/admin/bundles", user}}>My Bundles</Link>
            </NavDropdown.Item>
            <Nav.Link>
              <Link to="/admin/products" user={user}>My Products</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="" className="NavBar-link" onClick={handleLogout}>
              LOG OUT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    :
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navBrand" href="/">Bundler App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item>
              <Link to="/shop" className="NavBar-link">Shop</Link>
            </NavDropdown.Item>
            <Nav.Link>
              <Link to="/login" className="NavBar-link">Login to My Store</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" className="NavBar-link">STORE SIGN UP</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
    return (
      <div className='NavBar'>
        {nav}
      </div>
    )
}

export default NavBar;