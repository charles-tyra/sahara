import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import CartCheckoutItem from "./CartCheckoutItem";

import './CartCheckout.css'
import checkmark from '../../assets/images/green_checkmark.png';

const CartCheckout = () => {
   const location = useLocation();
   const carts = location.state?.carts;
   const currentUser = useSelector(state => state.session.user);

   if (!currentUser || !carts) return <Redirect to='/carts' />

   return (
      <div id='checkout-background'>
         <div id='order-placed-container'>
            <div id='order-placed'>
               <div> 
                  <img src={checkmark} id='green-checkmark' /> Order placed, thanks!
               </div>
               Confirmation will be sent by pelican or camel, depending on location.
            </div>
            <div id='checkout-index-container'>
               <div id='shipping-div'>
                  Shipping direct to {currentUser.firstName} {currentUser.lastName}
               </div>
               {carts.map((cartItem) => (<CartCheckoutItem cartItem={cartItem} />))}
            </div>
         </div>
         <div id='checkout-ad'>
            test
         </div>
      </div>
   )
}

export default CartCheckout;