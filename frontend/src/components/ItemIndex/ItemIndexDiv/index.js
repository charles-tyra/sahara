import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './ItemIndexDiv.css';
import Footer from "../../Footer";

function ItemIndexDiv( {item} ) {
   console.log(item);

   return (
      <div className="item-index-div">
         <a className="item-index-image-container" href={`/items/${item.id}`}>
            <img className="item-index-image" src={item.photoUrls[1]}/>
         </a>
         <a className='item-index-name' href={`/items/${item.id}`}>{item.itemName}</a>
      </div>
   )
}

export default ItemIndexDiv;