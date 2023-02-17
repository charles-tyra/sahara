import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, fetchItem } from '../../store/items';
import './ShowPage.css';
import { useParams } from 'react-router-dom';
import bells from '../../assets/images/bells.png';
import Footer from '../Footer';

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
   return (
      <> 
         <div id='show-page-container'> 
            <div id='show-image-container'>
               <img src={item.photoUrls[1]} alt=''/>
            </div>
            <div id='show-info-container'>
               <h2>{item.itemName}</h2>
               <div id='show-review-info'></div>
               <div></div>
               <hr/>
               <div id='description-div'>{item.description}</div>
               <div><span className='description-span'>Colors</span>{item.colors}</div>
               <div><span className='description-span'>Room Type</span>{item.theme}</div>
               <div><span className='description-span'>Material</span>{item.material}</div>
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