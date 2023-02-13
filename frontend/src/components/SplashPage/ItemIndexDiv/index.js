import React from "react";
import './ItemIndexDiv.css';
import placeholder from '../../../assets/images/sahara_placeholder.png';

const ItemIndexDiv = ( {item, theme} ) => {
   console.log(item);
   const itemShowLink = `/items/${item.id}`

   return (
      <div className='item-div'>
         <a href={itemShowLink} className='item-image'>
            <img src={placeholder} alt=''/>
         </a>
      </div>
   )
}

export default ItemIndexDiv;