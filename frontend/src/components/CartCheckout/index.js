import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const CartCheckout = () => {
   const location = useLocation();
   console.log(location);

}

export default CartCheckout;