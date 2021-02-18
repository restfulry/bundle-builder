import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from "../../components/BundleListItem/BundleListItem"

import Card from 'react-bootstrap/Card';

function ShopPage({location, match, user}) {
  const {store} = location.state;
  const products = store.products;
  const bundles = store.bundles;

  console.log("STORE",store)

  return (
    <div>
      <h1>Welcome to {store.storeName}</h1>
     {bundles.map((bundle) => <BundleListItem user={user} key={bundle._id} bundle={bundle} store={store}/>)}
    </div>
  )
};

export default ShopPage;