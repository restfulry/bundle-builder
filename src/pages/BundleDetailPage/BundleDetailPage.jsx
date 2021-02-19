import React from 'react';
import BundleCard from '../../components/BundleCard/BundleCard';

function BundleDetailPage({location, storeProducts}) {
  const bundle = location.state.bundle;
  console.log("BundleDetailPage bundle: ", bundle)
  const productsInBundle = storeProducts.filter(product => bundle.eligibleProducts.includes(product._id))
  const requiredBundleProducts = storeProducts.filter(product => bundle.requiredProducts.includes(product._id))

  return (
    <div>
      <h1>Bundle Details</h1>
      <BundleCard bundle={bundle} storeProducts={storeProducts} productsInBundle={productsInBundle} requiredBundleProducts={requiredBundleProducts}/>
    </div>
  );
};

export default BundleDetailPage;