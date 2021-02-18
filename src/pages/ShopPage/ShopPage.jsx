import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function ShopPage({location, match}) {
  console.log("location",location)
  console.log("params", match.params.storeURL)
  return (
    <div>
      <h1>Choose your bundle</h1>
    </div>
  )
};

export default ShopPage;