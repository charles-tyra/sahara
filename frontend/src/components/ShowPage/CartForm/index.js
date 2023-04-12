import React, { useState } from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts, createCart, updateCart } from '../../../store/carts.js'

const CartForm = ({ itemId }) => {
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(1);

   const currentUser = useSelector(state => state.session.user);

   console.log({ ownerId: currentUser.id, itemId: parseInt(itemId), quantity });

   useEffect(() => {
      dispatch(fetchCarts());
   }, []);

   const handleSubmit = e => {
      if (currentUser) {
         return dispatch(createCart({ownerId: currentUser.id, itemId: parseInt(itemId), quantity}))
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input type='number' min='1' max='30' />
         <button type='submit' id='cart-button'>Add to Cart</button>
         <button id='buy-button'>Buy now</button>
      </form>
   )
}

export default CartForm;