import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviews, fetchReviews } from '../../../store/reviews';

import './ItemIndexDiv.css';
import { Link } from "react-router-dom";

import bells from '../../../assets/images/bells.png';
import ratings from '../../../assets/images/rating_placeholder.png'

function ItemIndexDiv( {item} ) {

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
            5.0 <img className='ratings' src={ratings} alt='' /> (49) 
            <div id='price-info'>
               <h3><img className='bells' src={bells} alt='' /> {item.bells}</h3>
            </div>
         </div>
      </div>
   )
}

export default ItemIndexDiv;