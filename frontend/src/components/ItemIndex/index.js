import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './ItemIndex.css';
import Footer from "../Footer";

function ItemIndex() {
   const dispatch = useDispatch();
   const items = useSelector(getItems);

   useEffect(() => {
      dispatch(fetchItems());
   }, []);

   if (items === []) {
      return (
         <div>loading...</div>
      );
   } else {


      return (
         <>
            <div id='filter-sidebar'>

            </div>
            <div id='item-index-container'>
               <div id='item-index-header'>
                  
               </div>
            </div>
            <Footer/>
         </>

      )
   }
}

export default ItemIndex;