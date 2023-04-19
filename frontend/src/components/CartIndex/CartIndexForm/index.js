import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "../../../store/carts";
import { getItem, fetchItem } from "../../../store/items";


const CartIndexForm = ({ cartItem }) => {
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(cartItem.quantity);
   const [selected, setSelected] = useState(true);
   const item = useSelector(getItem(cartItem.itemId));

   console.log(item);

   useEffect(() => {
      dispatch(fetchItem(cartItem.itemId))
   }, [])

   const handleUpdate = (e) => {

   }

   

   return (
      <div className="cart-index-form">
         <form>

         </form>
      </div>
   )
}

export default CartIndexForm;