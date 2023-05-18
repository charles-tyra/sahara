import React from "react";
import './ItemIndexDiv.css';
import { Link } from "react-router-dom";

import bells from '../../../assets/images/bells.png';
import ReactStars from "react-stars";

function ItemIndexDiv( {item} ) {
   let reviewSum = 0;
   item.reviews.map(review => reviewSum += review.rating)

   item.reviews.length ? reviewSum = reviewSum / item.reviews.length : reviewSum = 0;

   return (
      <div className="item-index-div">
         <div className="item-index-image-container">
            <Link to={`/items/${item.id}`}> 
               <img className="item-index-image" src={item.photoUrls[1]} />
            </Link>
         </div>
         <div className="item-index-div-info">
            <a className='item-index-name' href={`/items/${item.id}`}>{item.itemName}</a>
            <div className='item-index-color'>{item.colors}</div>
            <div className="item-index-reviews">
               <div className="review-blocker index-blocker"/>
               <ReactStars className='index-star' value={reviewSum} /> <span>({item.reviews.length}) </span>
               <ReactStars className="index-star-backer" value={5}/>
            </div>
            <div id='price-info'>
               <h3><img className='bells' src={bells} alt='' /> {item.bells}</h3>
            </div>
         </div>
      </div>
   )
}

export default ItemIndexDiv;