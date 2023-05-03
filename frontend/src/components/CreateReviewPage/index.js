import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviews";
import ReactStars from 'react-stars';
import './CreateReviewPage.css';
import { Redirect, useParams } from "react-router-dom";

const CreateReviewPage = () => {
   const dispatch = useDispatch();
   const currentUser = useSelector(state => state.session.user);
   const {itemId} = useParams();

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [rating, setRating] = useState(0);

   if(!currentUser || !itemId) return <Redirect to='/' />

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
   <form onSubmit={handleSubmit}>
      <ReactStars count={5} size={24} half={false} value={rating} onChange={e => setRating(e)} />
      title
      <input onChange={e => setTitle(e.target.value)} />
      body
      <input onChange={e => setBody(e.target.value)} />
      <button type="submit">submit button</button>
   </form>
   )
}

export default CreateReviewPage;