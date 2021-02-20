import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = ({user, handleLogout}) => {
  let nav = user ?

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"><div className="navBrand">{user.name}</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={{pathname: "/admin/bundles", user}} className="NavBar-link">My Bundles</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to={{pathname: "/admin/products", user}} className="NavBar-link">My Products</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to="" className="NavBar-link" onClick={handleLogout}>
                LOG OUT
                </Link>
              </Nav.Link>
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    :

      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navBrand" href="/">Bundler App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown.Item>
              <Nav.Link>
                <Link to="/shop" className="NavBar-link">Shop</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to="/login" className="NavBar-link">Login to My Store</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link>
                <Link to="/signup" className="NavBar-link">STORE SIGN UP</Link>
              </Nav.Link>
            </NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    return nav
}

export default NavBar;