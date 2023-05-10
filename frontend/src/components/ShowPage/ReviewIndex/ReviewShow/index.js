import React from 'react';
import { useSelector } from 'react-redux';
import './ReviewShow.css'

import ReactStars from 'react-stars';
import profilepic from '../../../../assets/images/profile-placeholder.png'
import { useHistory } from 'react-router-dom';

const ReviewShow = ({review}) => {
   const currentUser = useSelector(state => state.session.user);
   const history = useHistory();
   
   const updateButton = () => {
      return (
         <>
            <button className='update-review-button'>
               Update
            </button>
         </>
      )
   }
   
   const reviewDate = new Date(review.updatedAt).toDateString().split(' ').splice(1).join(' ').split(' 202').join(', 202');

   return (
      <>
         <div className='review-author'>
            <img src={profilepic} className='prof-pic' /> {review.author.author} {review.authorId === currentUser.id ? <span>(Me)</span> : null}
         </div>
         <div className='review-rating'>
            <ReactStars className='review-show-rating' value={review.rating} /> <ReactStars className='review-show-backer' value={5} />
            <div className='edit-stars'/>
            &nbsp; &nbsp;{review.title}
         </div>
         <div className='review-date'>
            Reviewed on {reviewDate}
         </div>
         <div className='review-body'>
            {review.body}
            {currentUser.id === review.authorId ? updateButton() : null}
         </div>
      </>
   )
}

export default ReviewShow;