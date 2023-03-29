import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './ItemIndexDiv.css';
import Footer from "../../Footer";

function ItemIndexDiv( {item} ) {
   console.log(item);

   return (
      <div className="item-index-div">
         <img className="item-index-image" src={item.photoUrls[1]}/>
         <a href={`/items/${item.id}`}>{item.itemName}</a>
      </div>
   )
}

export default ItemIndexDiv;