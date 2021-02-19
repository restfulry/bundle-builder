import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ShopBundleItem from "../../components/ShopBundleItem/ShopBundleItem"

import {Container, CardDeck} from 'react-bootstrap';

function ShopPage({location, match, user, handleGetStoreBundles}) {
  const {store} = location.state;
  
  const BundleList = (location) => {
    const [bundle, setBundle] = useState([]);
    console.log("SHOPPAGE",location.state.store)
    useEffect(() => {
      handleGetStoreBundles(location.state.store)
    }, [])

    return;
  }
  
  const products = store.products;
  const bundles = store.bundles;

  console.log("ShopPage Bundles: ", bundles)

  function isAdmin() {
    if(user.storeOwned.includes(store._id)){
      return true
    };
  };

  console.log("STORE",store)

  return (
    <div>
      <h1>Welcome to {store.storeName}</h1>
      
      {user ? isAdmin() && user.name : <div></div>}
      <Container fluid>
        <CardDeck className="mx-auto storeCards">
          {bundles.map((bundle) => 
          <ShopBundleItem store={store} bundle={bundle} products={products}/>
          )}
        </CardDeck>
      </Container>
    </div>
  )
};

export default ShopPage;