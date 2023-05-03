import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, fetchReviews } from '../../../store/reviews';
import { useParams } from "react-router-dom";
import './ShowPageReviews.css';

import ReactStars from 'react-stars';
import { render } from "react-dom";

const ShowPageReviews = () => {
   const { itemId } = useParams();
   const dispatch = useDispatch();
   const reviews =  useSelector(getReviews);

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [rating, setRating] = useState(0);

   useEffect(() => {
      dispatch(fetchReviews(itemId));
   }, []);

   return (
      <>
         <form>
            <ReactStars count={5} size={24} half={true} />
         </form>
      </>
   )
}

export default ShowPageReviews;