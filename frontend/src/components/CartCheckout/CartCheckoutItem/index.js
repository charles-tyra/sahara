import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, fetchItem } from "../../../store/items";
import { deleteCart } from "../../../store/carts";
import { Link } from "react-router-dom";
import './CartCheckoutItem.css';

const CartCheckoutItem = ({cartItem}) => {
   const dispatch = useDispatch();
   const item = useSelector(getItem(cartItem.itemId));

   // Estimated delivery
   const date = new Date();
   date.setDate(date.getDate() + 1);
   let tomorrow = date.toDateString().split(" ");
   tomorrow = 'Tomorrow, ' + tomorrow.splice(1, 2).join(" ");

   useEffect(() => {
      dispatch(fetchItem(cartItem.itemId))
      if(cartItem.id !== undefined) dispatch(deleteCart(cartItem.id));
   }, []);

   if (item === undefined) return null;
      

   return (
      <div className="cart-checkout-item">
         <div className="cart-shipping-container">
            <div className="cart-shipping" >
               <div>
                  {tomorrow}
               </div>
               Estimated delivery
            </div>
         </div>
         <Link to={`/items/${item.id}`}>
            <img className='cart-checkout-item-img' src={item.photoUrls[0]}/>
         </Link>
      </div>
   )
}

export default CartCheckoutItem;