import React from 'react';
import styles from './HomePage.css'

import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'

function HomePage() {
  return (
    <div>
      <div className="hero">
        <h1>Build your own bundles</h1>
        <p>
          Save at your favorite stores by building your own bundles!
        </p>
        <p>
          <Button variant="success" type="button"
      >
            <Link to="/shop" className="NavBarLink">SHOP NOW</Link>
          </Button>
        </p>
      </div>
      <div className="module">
        <h1>Store Owner?</h1>
        <p>
          Add your product catalog, set custom bundle parameters, and increase your AOV!
        </p>
        <p>
          <Button variant="success" style={{ backgroundColor: 'pink' }}>
            <Link to="/signup" className="NavBarLink">STORE SIGN UP</Link>
          </Button>
        </p>
      </div>


    </div>
  )

};

export default HomePage;
