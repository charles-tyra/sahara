import React from "react";
import { useSelector } from "react-redux";
import './ReviewIndex.css';

import ReactStars from "react-stars";
import ShowPageReviewButton from "./ShowPageReviewButton";
import ReviewShow from "./ReviewShow";

const ReviewIndex = ({ reviews }) => {
   const currentUser = useSelector(state => state.session.user);
   
   // Check whether to update or create
   let updateBoolean = false;
   for(let j = 0; j < reviews?.length; j++) {
      if (reviews[j]?.authorId === currentUser?.id) updateBoolean = true;
   }

   // Ratings Conglomeration
   let avgReview = 0;
   let progReviews = { 1:0, 2:0, 3:0, 4:0, 5:0};
   if (reviews !== []) {
      reviews.forEach(review => {
         avgReview = review.rating + avgReview
         progReviews[review.rating] = progReviews[review.rating] + 1;
      });
      reviews.length ? avgReview = avgReview / reviews.length : avgReview = avgReview;
      progReviews[1] !== 0 ? progReviews[1] = Math.floor(progReviews[1] / reviews.length * 100) : progReviews[1] = 0;
      progReviews[2] !== 0 ? progReviews[2] = Math.floor(progReviews[2] / reviews.length * 100) : progReviews[2] = 0;
      progReviews[3] !== 0 ? progReviews[3] = Math.floor(progReviews[3] / reviews.length * 100) : progReviews[3] = 0;
      progReviews[4] !== 0 ? progReviews[4] = Math.floor(progReviews[4] / reviews.length * 100) : progReviews[4] = 0;
      progReviews[5] !== 0 ? progReviews[5] = Math.floor(progReviews[5] / reviews.length * 100) : progReviews[5] = 0;
   }

   console.log(reviews);

   const checkReviewPercentage = (percentage) => {
      if (percentage === 0) return { width: '0'}
      if (percentage === 100) return { width: '200px', border: '1px solid rgb(215, 111, 45)', borderRadius: '6px'}
      return { width: `${percentage}` + '%', border: '1px solid rgb(215, 111, 45)', borderBottomLeftRadius: '6px', borderTopLeftRadius: '6px' }
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
                     <ReactStars className="backer" value={5} />
                  </div>
                  <div id='total-ratings'> 
                     {reviews?.length ? reviews.length : '0'} global ratings
                  </div>
                  <div className='percentage-container'>
                     5 Star <progress classname='review-percentage' max={100} value={progReviews[5]}></progress> <span>{progReviews[5]}%</span>
                  </div>
                  <div className="percentage-container">
                     4 Star <progress classname='review-percentage' max={100} value={progReviews[4]}></progress> <span>{progReviews[4]}%</span>
                  </div>
                  <div className="percentage-container">
                     3 Star <progress classname='review-percentage' max={100} value={progReviews[3]}></progress> <span>{progReviews[3]}% </span>
                  </div>
                  <div className="percentage-container">
                     2 Star <div className="review-rating-container"><div className="review-rating-avg" style={checkReviewPercentage(progReviews[1])} /></div>
                     <span>{progReviews[2]}%</span>
                  </div>
                  <div className="percentage-container">
                     1 Star <progress classname='review-percentage' max={100} value={progReviews[1]}></progress> <span>{progReviews[1]}%</span>
                  </div>
               </div>
               {!updateBoolean ? <ShowPageReviewButton /> : null}
            </div>
            <div id='right-show-review-column'>
               {reviews.length !== 0 ? <h6 id='review-index-header'>Top reviews</h6> : <h6>No customer reviews</h6>}
               {reviews.length !== 0 ? reviews.map(review => (<ReviewShow review={review} />)) : null}
            </div>
            <div className="review-rating-container">
               <div className="review-rating-avg" style={checkReviewPercentage(100)} />
            </div>
         </div>
      </>
   )

}

export default ReviewIndex;