import React from 'react';
import BundleCard from '';

function BundleDetailPage({location}) {
  const bundle = location.state.bundle;
  return (
    <div>
      <h1>Bundle Details</h1>
      <BundleCard key={bundle._id} bundle={bundle} />
    </div>
  );
};

export default BundleDetailPage;