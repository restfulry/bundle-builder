import React from 'react';
import { withRouter } from 'react-router-dom';
import ShopBundleItem from '../../components/ShopBundleItem/ShopBundleItem'

import {Row, Container, Button} from 'react-bootstrap';

function ShopBundleIndexPage({location}) {
  const store = location.state.selectedStore;
  const bundles = location.state.selectedStoreBundles;
  const products = location.state.selectedStoreProducts;

  return (
      <Container fluid="xl">
        <div className="header">
          <h1>{store.storeName}'s Bundles</h1>
        </div>
        <Row>
          {bundles.map(bundle => <ShopBundleItem key={bundle._id} bundle={bundle} store={store} products={products}/>)}
        </Row>
      </Container>
  )
};

export default withRouter(ShopBundleIndexPage);