import React from 'react';
import './ReviewShow.css'

import ReactStars from 'react-stars';
import profilepic from '../../../../assets/images/profile-placeholder.png'

const ReviewShow = ({review}) => {
   const reviewDate = new Date(review.updatedAt).toDateString().split(' ').splice(1).join(' ').split(' 202').join(', 202');
   console.log(reviewDate);
   
   return (
      <>
         <div className='review-author'>
            <img src={profilepic} className='prof-pic' /> {review.author.author}
         </div>
         <div className='review-rating'>
            <ReactStars value={review.rating} /> <ReactStars className='review-show-backer' value={5} />
            <div className='edit-stars'/>
            {review.title}
         </div>
         <div className='review-date'>
            Reviewed on {reviewDate}
         </div>
         <div className='review-body'>
            {review.body}
         </div>
      </>
   )
}

export default ReviewShow;