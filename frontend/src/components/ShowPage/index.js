import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, fetchItem } from '../../store/items';
import { getReviews, fetchReviews } from '../../store/reviews';
import { useParams } from 'react-router-dom';
import './ShowPage.css';
import bells from '../../assets/images/bells.png';

import twoxone from '../../assets/images/2x1.png'
import twoxtwo from '../../assets/images/2x2.png'
import threextwo from '../../assets/images/3x2.png'
import threexthree from '../../assets/images/3x3.png'
import fourxthree from '../../assets/images/4x3.png'
import fourxfour from '../../assets/images/4x4.png'
import fivexfive from '../../assets/images/5x5.png'

import CartForm from './CartForm';
import ReactStars from 'react-stars';
import ReviewIndex from './ReviewIndex';

function ShowPage() {
   const { itemId } = useParams();
   const item = useSelector(getItem(itemId));
   const reviews = useSelector(getReviews);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchItem(itemId));
      dispatch(fetchReviews(itemId));
   }, [dispatch, itemId])

   if(!item) {
      return (
         null
      )
   } else {
      // item.dimensions img src
      let dimensions = null;
      if (item.dimensions === 'twoxtwo') dimensions = twoxtwo;
      else if (item.dimensions === 'twoxone') dimensions = twoxone;
      else if (item.dimensions === 'threextwo') dimensions = threextwo;
      else if (item.dimensions === 'threexthree') dimensions = threexthree;
      else if (item.dimensions === 'fourxthree') dimensions = fourxthree;
      else if (item.dimensions === 'fourxfour') dimensions = fourxfour;
      else if (item.dimensions === 'fivexfive') dimensions = fivexfive;

      // Estimated delivery
      const date = new Date();
      date.setDate(date.getDate() + 1);
      let tomorrow = date.toDateString().split(" ");
      tomorrow = 'Tomorrow, ' + tomorrow.splice(1, 2).join(" ");

      // Order within
      let minutes = 60 - date.getMinutes();
      let hours = 24 - date.getHours();
      minutes === 60 ? minutes = 0 : hours = hours - 1;

      const timeString = `${hours} hrs ${minutes} mins`

      //Avg Review
      let avgReview = 0;
      if (reviews !== []) {
         reviews.forEach(review => avgReview = review.rating + avgReview);
         reviews.length ? avgReview = avgReview / reviews.length : avgReview = avgReview;
      }
      
   return (
      <> 
         <div id='show-page-container'>
            <div className='show-page-row'>
               <div id='show-image-container'>
                  <img src={item.photoUrls[1]} alt=''/>
               </div>
               <div id='show-info-container'>
                  <h3>{item.itemName}</h3>
                  <div className='show-page-row ratings-row'>
                     {avgReview !== 0 ? <span>{avgReview}</span> : null}
                     <ReactStars className='stars show-stars' value={avgReview} /> &nbsp;&nbsp;
                     <span>{reviews.length ? reviews.length : '0'} ratings</span>
                  </div>
                  <hr/>
                  <div><span className='description-span'>Colors</span>{item.colors}</div>
                  <div><span className='description-span'>Room Type</span>{item.theme}</div>
                  <div><span className='description-span'>Material</span>{item.material}</div>
                  <div><span className='description-span'>Dimensions</span><img src={dimensions} alt=''/></div>
                  <hr/>
                  <h6 id='about-this'>About this item</h6>
                  <div id='description-div'>
                     &emsp;{item.description}
                  </div>

               </div>
               <div id='show-cart-container'>
                  <div id='price-info'>
                     <h3><img className='bells' src={bells} alt=''/>{item.bells}</h3>
                     Sell back for <img className='bells' src={bells} alt='' />{(item.bells) / 4}
                  </div>

                  FREE delivery <span id='bold-span'>{tomorrow}.</span> Order within <span className='green-span'>{timeString}</span>
                  <br />
                  <br />
                  <h5 className='green-span'>In Stock</h5>

                  <CartForm itemId={itemId} />
               </div>
            </div>
            <ReviewIndex reviews={reviews}/>
         </div>
      </>
   )
   }
}

export default ShowPage;