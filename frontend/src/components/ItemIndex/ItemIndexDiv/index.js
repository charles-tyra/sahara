import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './ItemIndexDiv.css';
import Footer from "../../Footer";
import { Link } from "react-router-dom";

function ItemIndexDiv( {item} ) {
   console.log(item);

   return (
      <div className="item-index-div">
         <div className="item-index-image-container">
            <Link to={`/items/${item.id}`}> 
               <img className="item-index-image" src={item.photoUrls[1]} />
            </Link>
         </div>
         <a className='item-index-name' href={`/items/${item.id}`}>{item.itemName}</a>
      </div>
   )
}

export default ItemIndexDiv;