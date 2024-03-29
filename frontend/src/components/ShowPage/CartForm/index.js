import React, { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts, createCart, updateCart, getCarts } from '../../../store/carts.js';

import { useHistory } from "react-router-dom";
import './CartForm.css'

const CartForm = ({ itemId }) => {
   const dispatch = useDispatch();
   const history = useHistory();
   const [quantity, setQuantity] = useState(1);
   const carts = useSelector(getCarts);

   const currentUser = useSelector(state => state.session.user);

   useEffect(() => {
      dispatch(fetchCarts());
   }, []);

   function getItemQuantity(carts) {
      for(let i = 0; i < carts.length; i++) {
         if (carts[i].itemId === parseInt(itemId)) return carts[i];
      }
      return null;
   }

   const handleSubmit = () => {
      let updateQuantity = null;
      updateQuantity = getItemQuantity(carts);

      if (currentUser && !updateQuantity) {
         dispatch(createCart({owner_id: currentUser.id, item_id: parseInt(itemId), quantity}))
         history.push(`/carts/new/${itemId}`);
      } else if (!currentUser) {
         history.push('/carts');
      } else {
         dispatch(updateCart({ id: updateQuantity.id,
                                          owner_id: currentUser.id, 
                                          item_id: parseInt(itemId), 
                                          quantity: (parseInt(quantity) + parseInt(updateQuantity.quantity))}))
         history.push(`/carts/new/${itemId}`);
      }
   }

   const handleBuyNow = () => {
      history.push('/carts/checkout', { carts: [{ itemId: parseInt(itemId), quantity }] })
   }

   return (
      <>
         <form id='show-page-cart' onSubmit={handleSubmit}>
            Qty: &nbsp; <select id='quantity-select' onChange={e => setQuantity(e.currentTarget.value)}>
               <option value='1'>1</option>
               <option value='2'>2</option>
               <option value='3'>3</option>
               <option value='4'>4</option>
               <option value='5'>5</option>
               <option value='6'>6</option>
               <option value='7'>7</option>
               <option value='8'>8</option>
               <option value='9'>9</option>
               <option value='10'>10</option>
               <option value='11'>11</option>
               <option value='12'>12</option>
               <option value='13'>13</option>
               <option value='14'>14</option>
               <option value='15'>15</option>
               <option value='16'>16</option>
               <option value='17'>17</option>
               <option value='18'>18</option>
               <option value='19'>19</option>
               <option value='20'>20</option>
               <option value='21'>21</option>
               <option value='22'>22</option>
               <option value='23'>23</option>
               <option value='24'>24</option>
               <option value='25'>25</option>
               <option value='26'>26</option>
               <option value='27'>27</option>
               <option value='28'>28</option>
               <option value='29'>29</option>
               <option value='30'>30</option>
            </select>
            <button type='submit' id='cart-button'>Add to Cart</button>
         </form>
         <button onClick={handleBuyNow} id='buy-button'>Buy now</button>
      </>
   )
}

export default CartForm;