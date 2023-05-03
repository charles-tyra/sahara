import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, fetchReviews } from '../../../store/reviews';
import { useParams } from "react-router-dom";
import './ShowPageReviews.css';

import ReactStars from 'react-stars';
import { createReview } from "../../../store/reviews";

const ShowPageReviews = () => {
   const { itemId } = useParams();
   const dispatch = useDispatch();
   const reviews =  useSelector(getReviews);
   const currentUser = useSelector(state => state.session.user);

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [rating, setRating] = useState(0);

   useEffect(() => {
      dispatch(fetchReviews(itemId));
   }, []);

   const handleSubmit = () => {
      return dispatch(createReview({
         item_id: itemId,
         author_id: currentUser.id,
         title,
         body,
         rating
      }))
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <ReactStars count={5} size={24} half={false} onChange={e => setRating(e)} />
            title
            <input onChange={e => setTitle(e.target.value)}/>
            body
            <input onChange={e => setBody(e.target.value)}/>
            <button type="submit">submit button</button>

         </form>
      </>
   )
}

export default ShowPageReviews;