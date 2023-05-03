import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, fetchReviews } from '../../../store/reviews';
import { useHistory, useParams } from "react-router-dom";
import './ShowPageReviews.css';

import ReactStars from 'react-stars';

const ShowPageReviews = () => {
   const { itemId } = useParams();
   const dispatch = useDispatch();
   const history = useHistory();
   const reviews =  useSelector(getReviews);

   useEffect(() => {
      dispatch(fetchReviews(itemId));
   }, []);

   return (
      <>
         <button onClick={() => history.push(`/items/${itemId}/reviews/create`)}>
            Write a review
         </button>

      </>
   )
}

export default ShowPageReviews;