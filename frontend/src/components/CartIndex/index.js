import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts, fetchCarts } from '../../store/carts';
import './CartIndex.css';
import Footer from '../Footer';

function CartIndex() {
   const dispatch = useDispatch();
   const carts = useSelector(getCarts);

   useEffect(() => {
      dispatch(fetchCarts());
   }, []);

   if

}