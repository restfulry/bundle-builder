import React from 'react';
import { Link } from 'react-router-dom';
import BundleListItem from "../../components/BundleListItem/BundleListItem"

import Card from 'react-bootstrap/Card';

function ShopPage({location, match, user}) {
  const {store} = location.state;
  const products = store.products;
  const bundles = store.bundles;

  console.log("ShopPage User: ", user)

  function isAdmin() {
    if(user.storeOwned.includes(store._id)){
      return true
    };
  };

  console.log("STORE",store)

  return (
    <div>
      <h1>Welcome to {store.storeName}</h1>
      {isAdmin() && user.name}
     {bundles.map((bundle) => <BundleListItem user={user} key={bundle._id} bundle={bundle} store={store} products={products}/>)}
    </div>
  )
};

export default ShopPage;