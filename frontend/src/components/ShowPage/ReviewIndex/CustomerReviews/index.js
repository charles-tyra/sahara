import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const CustomerReviews = ({reviews}) => {

   let avgReview = 0;
   if (reviews !== []) {
      reviews.forEach(review => avgReview = review.rating + avgReview);
      avgReview = avgReview / reviews.length;
   }

   return (
      
   )
   
}

export default CustomerReviews;