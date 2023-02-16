import React from "react";
import './ItemIndexDiv.css';
// import { Link } from "react-router-dom";

const ItemIndexDiv = ( {divItems, theme} ) => {

   if (divItems === []) return (<div>loading...</div>)

   const newItems = [];
   for(let i = 0; (i < 4 && i < divItems.length); i++) {
      let rand = Math.floor(Math.random() * divItems.length);
      if(!newItems.includes(divItems[rand])) newItems.push(divItems[rand]);
   }

   return (
      <div className="index-theme-container">
         <h2 className='index-theme-h2'>Check out these {theme} rugs!</h2>
         {newItems.map(item => {
            return (
                  <a key={item.id} href={`/items/${item.id}`}>
                     <img className='index-div-img' src={item.photoUrls[0]}/>
                  </a>
            )
         })}
      </div >
   )
}

export default ItemIndexDiv;