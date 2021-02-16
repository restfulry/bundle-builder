import React from 'react';
import { Link } from 'react-router-dom';

function BundleIndexPage(props) {
  return (
    <div>
      <h1>Bundles Index</h1>
      <Link to="/bundles/new">Create New Bundle</Link>
      <div>
      </div>
    </div>
  )
};

export default BundleIndexPage;