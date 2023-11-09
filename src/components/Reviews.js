// Reviews.js

import React from 'react';

// BuyerReview component as an arrow function
const BuyerReview = () => {
  return (
    <div className="buyer-review">
      <h3>Buyer Review</h3>
      <p>This is a review from a satisfied buyer.</p>
    </div>
  );
};

// SellerReview component as an arrow function
const SellerReview = () => {
  return (
    <div className="seller-review">
      <h3>Seller Review</h3>
      <p>This is a review from a happy seller.</p>
    </div>
  );
};

export { BuyerReview, SellerReview };
