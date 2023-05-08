import React from "react";
import { useSelector } from "react-redux";
import './ReviewIndex.css';

import ReactStars from "react-stars";
import ProgressBar from "react-bootstrap/esm/ProgressBar";
import ShowPageReviews from "./ShowPageReviews";

const ReviewIndex = ({ reviews }) => {
   const currentUser = useSelector(state => state.session.user);
   
   // Check whether to update or create
   let updateBoolean = false;
   for(let j = 0; j < reviews?.length; j++) {
      if (reviews[j]?.authorId === currentUser?.id) updateBoolean = true;
   }

   let avgReview = 0;
   if (reviews !== []) {
      reviews.forEach(review => avgReview = review.rating + avgReview);
      reviews.length ? avgReview = avgReview / reviews.length : avgReview = avgReview;
   }

   return (
      <>
         <hr />
         <div id='show-page-reviews-container'>
            <div id='left-show-review-column'>
               <div id='review-average-container'>
                  <h4 id='bold-span' className='customer'>Customer reviews</h4>
                  <div id='review-stars'>
                     <div className="review-blocker" />
                     <ReactStars className='stars' color={'#FC9B90'} value={avgReview} /> &nbsp; {avgReview} out of 5
                  </div>
                  <div id='total-ratings'> 
                     {reviews?.length ? reviews.length : '0'} global ratings
                  </div>
                  <div>
                     <ProgressBar />
                  </div>
               </div>
               {!updateBoolean ? <ShowPageReviews /> : null}
            </div>
            <div id='right-show-review-column'>

            </div>
         </div>
      </>
   )

}

export default ReviewIndex;