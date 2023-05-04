import React from "react";
import { useSelector } from "react-redux";
import './ReviewIndex.css';

import ReactStars from "react-stars";
import ShowPageReviews from "./ShowPageReviews";

const ReviewIndex = ({reviews}) => {

   let avgReview = 0;
   if (reviews !== []) {
      reviews.forEach(review => avgReview = review.rating + avgReview);
      avgReview = avgReview / reviews.length;
   }

   return (
      <>
         <hr />
         <div id='show-page-reviews-container'>
            <div id='left-show-review-column'>
               <div id='review-average-container'>
                  <h4 id='bold-span' className='customer'>Customer reviews</h4>
                  <div id='review-stars'>
                     <ReactStars className='stars' value={avgReview} /> &nbsp; {avgReview} out of 5
                  </div>
               </div>
               <ShowPageReviews />
            </div>
            <div id='right-show-review-column'>

            </div>
         </div>
      </>
   )

}

export default ReviewIndex;