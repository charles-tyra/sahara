import React from "react";
import { useHistory, useParams } from "react-router-dom";
import './ShowPageReviews.css';

const ShowPageReviews = () => {
   const { itemId } = useParams();
   const history = useHistory();

   return (
      <>
         <hr />
         <h5 id='show-page-reviews-header'>Review this product</h5>
         <div id='show-page-under-header'>
            Share your thoughts with other customers
         </div>
         <button id='create-review-button' onClick={() => history.push(`/items/${itemId}/reviews/create`)}>
            Write a customer review
         </button>
      </>
   )
}

export default ShowPageReviews;