import React from 'react';
import { Link } from 'react-router-dom';
import ShopBundleItem from '../../components/ShopBundleItem/ShopBundleItem'

import {Row, Container} from 'react-bootstrap';

function ShopBundleIndexPage({location}) {
  const store = location.state.selectedStore;
  const bundles = location.state.selectedStoreBundles;
  const products = location.state.selectedStoreProducts;
  
  console.log("Bundle Index Page: ", store)

  return (
      <Container fluid="xl">
      <h1>Bundles Index</h1>
        <Row>
          {bundles.map(bundle => <ShopBundleItem key={bundle._id} bundle={bundle} store={store} products={products}/>)}
        </Row>
      </Container>
  )
};

export default ShopBundleIndexPage;