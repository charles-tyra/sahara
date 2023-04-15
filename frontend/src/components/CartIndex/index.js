import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, fetchCarts } from '../../store/carts';
import money from '../../assets/images/money-clip-art-38.jpg';
import './CartIndex.css';
import { Link } from 'react-router-dom';

function CartIndex() {
   const dispatch = useDispatch();
   const carts = useSelector(getCarts);
   const currUser = useSelector(state => state.session.user)

   useEffect(() => {
      dispatch(fetchCarts());
   }, []);

   if (!currUser) {
      return (
         <div id='cart-background'>
            <div id='cart-session'>
               <div id='cart-image'>
                  <img id='cart-image' src={money} />
               </div>
               <div id='cart-session-info'>
                  <h2>Your Sahara Cart is empty</h2>
                  <Link id='cart-deals' to={'/items'}>Shop today's deals</Link>
                  <div id='cart-session-buttons-container'>
                     <Link to={'/login'}>
                        <button>Sign in to your account</button>
                     </Link>
                     <Link to={'/signup'}>
                        <button>Sign up now</button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      )
   } else {
      return (
         <div id='cart-background'>

         </div>
      )
   }

}

export default CartIndex;