import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../../../store/carts";
import { getItem, fetchItem } from "../../../store/items";
import './CartIndexForm.css'
import { Link } from "react-router-dom";


const CartIndexForm = ({ cartItem }) => {
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(cartItem.quantity);
   const [selected, setSelected] = useState(true);
   const item = useSelector(getItem(cartItem.itemId));

   console.log(item);

   useEffect(() => {
      dispatch(fetchItem(cartItem.itemId))
   }, [])

   const handleDelete = (e) => {
      return dispatch(deleteCart(cartItem.id))
   }

   if (item === undefined) return null;
   

   return (
      <>
         <div className='price'>Price</div>
         <hr className="cart-form-spacer"/>
         <div className="cart-index-form">
            <Link to={`/items/${item.id}`}>
               <img className='cart-image' src={item.photoUrls[1]} alt='' />
            </Link>
            <div className='cart-form'>
               <Link to={`/items/${item.id}`}>
                  {item.itemName}
               </Link>
               <form className='cart-form'>
                  test
               </form>
               <div className='cart-delete' onClick={handleDelete}>
                  Delete Me
               </div>
            </div>
            <div className="cart-item-price">
               {item.bells}
            </div>
         </div>
      </>
   )
}

export default CartIndexForm;