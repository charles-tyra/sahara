import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, updateReview } from "../../store/reviews";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import ReactStars from 'react-stars';
import './CreateReviewPage.css';
import { fetchItem, getItem } from "../../store/items";

const CreateReviewPage = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const location = useLocation();
   const {itemId} = useParams();
   const currentUser = useSelector(state => state.session.user);
   const item = useSelector(getItem(itemId));

   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [rating, setRating] = useState(0);

   useEffect(() => {
      dispatch(fetchItem(itemId));
      if(location?.state?.review) {
         setTitle(location.state.review.title);
         setBody(location.state.review.body);
         setRating(location.state.review.rating);
      }
   }, [])
   
   if(!currentUser) return <Redirect to='/login' />

   const handleSubmit = async () => {
      if(location.state.review) {
         dispatch(updateReview({
            id: location.state.review.id,
            item_id: itemId,
            author_id:currentUser.id,
            title,
            body,
            rating
         }));
      } else {
         dispatch(createReview({
            item_id: itemId,
            author_id: currentUser.id,
            title,
            body,
            rating
         }));
      }
         
      history.push(`/items/${itemId}`)
   }

   if(!item) return null;

   return (
      <div id='create-review-page-container'>
         {location.state?.review ? <h4 id='create-review-header'>Update Review</h4> : <h4 id='create-review-header'>Create Review</h4>}
         <div id='create-review-item-info'>
            <img id='review-image'src={item.photoUrls[0]}/>
            <span>{item.itemName}</span>
         </div>
         <hr className="create-review-space image-space"/>

         <h5>Overall Rating</h5>
         <ReactStars count={5} size={24} half={false} value={rating} onChange={e => setRating(e)} />
         <hr className="create-review-space"/>

         <h5>Add a headline</h5>
         <input  
            placeholder="What's most important to know?"
            value={title}
            onChange={e => setTitle(e.target.value)} />
         <hr className="create-review-space"/>

         <h5>Add a written review</h5>
         <input
            placeholder="What did you like or dislike? What did you use this product for?"
            value={body}
            onChange={e => setBody(e.target.value)} />
         <hr className="create-review-space"/>

         <button id='review-submit' onClick={handleSubmit}>Submit</button>
      </div>
   )
}

export default CreateReviewPage;