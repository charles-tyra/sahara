import React from "react";
import './ItemIndexDiv.css';
// import { Link } from "react-router-dom";

const SplashItemDiv= ( {divItems, theme} ) => {

   if (divItems === []) return (<div>loading...</div>)

   const newItems = [];
   while(newItems.length < 4 && newItems.length < divItems.length) {
      let rand = Math.floor(Math.random() * divItems.length);
      if(!newItems.includes(divItems[rand])) newItems.push(divItems[rand]);
   }

   return (
      <div className="index-theme-container">
         <h2 className='index-theme-h2'>Check out these {theme} rugs</h2>
         {newItems.length === 4 ? newItems.map(item => {
            return (
               <a key={item.id} href={`/items/${item.id}`}>
                  <img className='index-div-img' src={item.photoUrls[0]}/>
               </a>
            )}) : null
         }
      </div >
   )
}

export default SplashItemDiv;