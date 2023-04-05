import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts, createCart, updateCart } from '../../../store/carts.js'

const CartForm = ({ itemId }) => {
   const dispatch = useDispatch();

   const [existingCart, setExistingCart] = useState(false);
   const currentUser = useSelector(state => state.session.user);

   
   useEffect(() => {
      dispatch(fetchCarts());
   })

   return (

   )
}