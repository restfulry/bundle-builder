import React from 'react';
import BundleCard from '../../components/BundleCard/BundleCard';

function BundleDetailPage({location, products}) {
  const bundle = location.state.bundle;
  const productsInBundle = products.filter(product => bundle.eligibleProducts.includes(product._id))

  return (
    <div>
      <h1>Bundle Details</h1>
      <BundleCard key={bundle._id} bundle={bundle} products={products} productsInBundle={productsInBundle} />
    </div>
  );
};

export default BundleDetailPage;