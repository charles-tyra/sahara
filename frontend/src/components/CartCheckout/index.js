import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";

const CartCheckout = () => {
   const location = useLocation();
   const carts = location.state?.carts;
   const currentUser = useSelector(state => state.session.user);

   if (!currentUser || !carts) return <Redirect to='/carts' />
   
   return (
      <div id='cart-background'>

      </div>
   )
}

export default CartCheckout;