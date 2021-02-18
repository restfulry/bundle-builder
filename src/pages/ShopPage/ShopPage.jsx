import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from "../../components/BundleListItem/BundleListItem"

import Card from 'react-bootstrap/Card';

function ShopPage({location, match}) {
  const {store} = location.state;
  const products = store.products;
  const bundles = store.bundles;

  return (
    <div>
      <h1>Welcome to {store.storeName}</h1>
     {bundles.map((bundle) => <BundleListItem key={bundle._id} bundle={bundle}/>)}
    </div>
  )
};

export default ShopPage;