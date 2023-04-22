import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, fetchCarts } from '../../store/carts';
import money from '../../assets/images/money-clip-art-38.jpg';
import './CartIndex.css';
import { Link } from 'react-router-dom';
import CartIndexForm from './CartIndexForm';

function CartIndex() {
   const dispatch = useDispatch();
   const carts = useSelector(getCarts);
   const currUser = useSelector(state => state.session.user);

   useEffect(() => {
      dispatch(fetchCarts());
   }, [dispatch]);

   if (!currUser) {
      return (
         <div id='cart-background'>
            <div id='cart-session'>
               <div>
                  <img id='cart-image' src={money} />
               </div>
               <div id='cart-session-info'>
                  <h2>Your Sahara Cart is empty</h2>
                  <Link id='cart-deals' to={'/items'}>Shop today's deals</Link>
                  <div id='cart-session-buttons-container'>
                     <Link to={'/login'} id='cart-login-container'>
                        <button id='cart-login'>Sign in to your account</button>
                     </Link>
                     <Link to={'/signup'}>
                        <button id='cart-signup'>Sign up now</button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      )
   } else {
      let subtotal = 0;
      for (let i = 0; i < carts.length; i++) subtotal = subtotal + (parseInt(carts[i].quantity) *parseInt(carts[i].item.bells));

      console.log(subtotal);
      const showSubtotal = boolean => {
         if (boolean) {
            return (
               <></>
            )
         } else {

         }
      }


      return (
         <div id='cart-background'>
            <div id='cart-index-container'> 
               <h2>Shopping Cart</h2>
               {carts !== [] ? carts.map(cartItem => <CartIndexForm cartItem={cartItem} key={cartItem.id} />) : null}
            </div>
            <div id='cart-checkout'> 
               Subtotal
            </div>
         </div>
      )
   }

}

export default CartIndex;