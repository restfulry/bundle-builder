import React from 'react';
import { Link } from 'react-router-dom';
import ShopBundleItem from '../../components/ShopBundleItem/ShopBundleItem'

function ShopBundleIndexPage({location}) {
  const store = location.state.selectedStore;
  const bundles = location.state.selectedStoreBundles;
  const products = location.state.selectedStoreProducts;
  
  console.log("Bundle Index Page: ", store)

  return (
    <div>
      <h1>Bundles Index</h1>
      {bundles.map(bundle => <ShopBundleItem key={bundle._id} bundle={bundle} store={store} products={products}/>)}
    </div>
  )
};

export default ShopBundleIndexPage;