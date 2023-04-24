import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, fetchCarts } from "../../store/carts";
import { getItem, fetchItem } from "../../store/items";
import { Link, useParams, Redirect } from "react-router-dom";

import './CartShow.css';
import checkmark from '../../assets/images/green_checkmark.png'

const CartShow = () => {
   const { itemId } = useParams();
   const carts = useSelector(getCarts);
   const item = useSelector(getItem(itemId));
   const dispatch = useDispatch();
   const currentUser = useSelector(state => state.session.user);

   useEffect(() => {
      dispatch(fetchCarts());
      dispatch(fetchItem(itemId));
   }, []);

   if (!currentUser) return <Redirect to="/carts" />;

   if (!item) {
      return (
         null
      )
   } else {
      let subtotal = 0;
      let itemTotal = 0;
      for (let i = 0; i < carts.length; i++) {
         subtotal = subtotal + (parseInt(carts[i].quantity) * parseInt(carts[i].item.bells));
         itemTotal = itemTotal + parseInt(carts[i].quantity);
      }

      console.log(item);

      return (
         <div id='cart-background'>
            <div id='cart-show-container'>
               <Link to={`/items/${itemId}`}>
                  <img id='cart-show-image' src={item.photoUrls[0]} alt='' />
               </Link>
               <div id='cart-show-info'>
                  <div id='cart-show-addedtocart'>
                     <img id='cart-show-checkmark' src={checkmark} /> Added To Cart
                  </div>
                  <span>Size:</span> {item.dimensions}
                  <br/>
                  <span>Color:</span> {item.colors}
               </div>
            </div>
            <div id='cart-checkout'>
            </div>
         </div>
      )
   }
}

export default CartShow;