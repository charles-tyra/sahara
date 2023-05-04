import React from "react";
import { useHistory, useParams } from "react-router-dom";
import './ShowPageReviews.css';

const ShowPageReviews = () => {
   const { itemId } = useParams();
   const history = useHistory();

   return (
      <>
         <button onClick={() => history.push(`/items/${itemId}/reviews/create`)}>
            Write a review
         </button>

      </>
   )
}

export default ShowPageReviews;