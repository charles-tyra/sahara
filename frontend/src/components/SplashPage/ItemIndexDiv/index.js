import React from "react";
import './ItemIndexDiv.css';
import placeholder from '../../../../assets/images/sahara_placeholder.png';
// import { Link } from "react-router-dom";

const ItemIndexDiv = ( {items, theme} ) => {

      // later functionality to introduce
   // items.map(item => {
   //    const itemShowLink = `/items/${item.id}`

   //       return ( 
   //          <div className = 'item-div' >
   //             <Link href={itemShowLink} className='item-image'>
   //                <img src={placeholder} alt='' />
   //             </Link>
   //          </div> 
   //       )
   // })


   // <div className='item-div' >
   //    <a href={itemShowLink} className='item-image'>
   //       <img src={placeholder} alt='' />
   //    </a>
   // </div> 
   
   const itemShowLink = `/items/${item.id}`

   return (
      <div className="index-theme-container">
         <h2 className='index-theme-h2'>Check out these cool {theme} based rugs!</h2>
         <a href=''>
            <img />
         </a>

      </div >
   )
}

export default ItemIndexDiv;