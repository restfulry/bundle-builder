import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

function StoresIndexPage({allStores, user}) {
  console.log("Store Index Page: ", allStores, user)

  return (
    <div>
      <h1>Something for everyone!</h1>
    </div>
  )
};

export default StoresIndexPage;