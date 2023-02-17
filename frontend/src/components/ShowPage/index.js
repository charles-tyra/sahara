import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, fetchItem } from '../../store/items';
import { useParams } from 'react-router-dom';
import './ShowPage.css';
import Footer from '../Footer';
import bells from '../../assets/images/bells.png';
import ratings from '../../assets/images/rating_placeholder.png'

import twoxone from '../../assets/images/2x1.png'
import twoxtwo from '../../assets/images/2x2.png'
import threextwo from '../../assets/images/3x2.png'
import threexthree from '../../assets/images/3x3.png'
import fourxthree from '../../assets/images/4x3.png'
import fourxfour from '../../assets/images/4x4.png'
import fivexfive from '../../assets/images/5x5.png'

function ShowPage() {
   const { itemId } = useParams();
   const item = useSelector(getItem(itemId));
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchItem(itemId));
   }, [dispatch])

   if(!item) {
      return (
         null
      )
   } else {
      let dimensions = null;
      if (item.dimensions === 'twoxtwo') dimensions = twoxtwo;
      else if (item.dimensions === 'twoxone') dimensions = twoxone;
      else if (item.dimensions === 'threextwo') dimensions = threextwo;
      else if (item.dimensions === 'threexthree') dimensions = threexthree;
      else if (item.dimensions === 'fourxthree') dimensions = fourxthree;
      else if (item.dimensions === 'fourxfour') dimensions = fourxfour;
      else if (item.dimensions === 'fivexfive') dimensions = fivexfive;

   return (
      <> 
         <div id='show-page-container'> 
            <div id='show-image-container'>
               <img src={item.photoUrls[1]} alt=''/>
            </div>
            <div id='show-info-container'>
               <h2>{item.itemName}</h2>
               <img className='ratings' src={ratings} /> 40 ratings
               <hr/>
               <div><span className='description-span'>Colors</span>{item.colors}</div>
               <div><span className='description-span'>Room Type</span>{item.theme}</div>
               <div><span className='description-span'>Material</span>{item.material}</div>
               <div><span className='description-span'>Dimensions</span><img src={dimensions}/></div>
               <hr/>
               <div id='description-div'>
                  <h4>About this item</h4><br/>
                  {item.description}
               </div>

            </div>
            <div id='show-cart-container'>
               <div id='price-info'>
                  <h3>{item.bells} <img className='bells' src={bells} /></h3>
                  Sell back for {(item.bells) / 4} <img className='bells' src={bells} />
               </div>

               <button id='cart-button'>Add to Cart</button>
               <button id='buy-button'>Buy now</button>
            </div>
         </div>
         <Footer />
      </>
   )
   }
}

export default ShowPage;