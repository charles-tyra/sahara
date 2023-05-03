import { csrfFetch } from "./csrf";

const RECIEVE_REVIEW = 'REVIEWS/RECIEVE_REVIEW';
const RECIEVE_REVIEWS = 'REVIEWS/RECIEVE_REVIEWS';
const REMOVE_REVIEW = 'REVIEWS/REMOVE_REVIEW';


const recieveReview = review => {
   return {
      type: RECIEVE_REVIEW,
      review
   }
};

const recieveReviews = reviews => {
   return {
      type: RECIEVE_REVIEWS,
      reviews
   }
};

const removeReview = reviewId => {
   return {
      type: REMOVE_REVIEW,
      reviewId
   }
};


export const getReview = reviewId => state => {
   if (state && state.reviews) return state.reviews[reviewId];
   return null;
}

export const getReviews = state => {
   if (state && state.reviews) return Object.values(state.reviews);
   return [];
}


export const fetchReview = reviewId => async dispatch => {
   const response = await csrfFetch(`/api/carts/${reviewId}`);

   const data = await response.json();
   dispatch(recieveReview(data.review));
}

export const fetchReviews = (itemId) => async dispatch => {
   const response = await csrfFetch(`/api/items/${itemId}/reviews`);

   const data = await response.json();
   dispatch(recieveReviews(data.reviews));
}

export const createReview = review => async dispatch => {
   const response = await csrfFetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(review)
   });

   const data = await response.json();
   dispatch(recieveReview(data.review));
}

export const updateReview = review => async dispatch => {
   const response = await csrfFetch(`/api/reviews/${review.id}`, {
      method: 'PATCH',
      body: JSON.stringify(review)
   });

   const data = await response.json();
   dispatch(recieveReview(data.review));
}

export const deleteReview = reviewId => async dispatch => {
   await csrfFetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
   });

   dispatch(removeReview(reviewId));
}


const reviewReducer = (state = {}, action) => {
   const nextState = {...state};

   switch(action.type) {
      case RECIEVE_REVIEW:
         nextState[action.review.id] = action.review;
         return nextState;
      case RECIEVE_REVIEWS:
         return {...nextState, ...action.reviews};
      case REMOVE_REVIEW:
         delete nextState[action.reviewId];
         return nextState;
      default:
         return state;
   }
}

export default reviewReducer;