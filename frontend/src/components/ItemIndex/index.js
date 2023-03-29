import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './ItemIndex.css';
import Footer from "../Footer";
import ItemIndexDiv from "./ItemIndexDiv";

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
            <div id='item'></div>
            <div id='filter-sidebar'>
               Testing
            </div>
            <div id='item-index-item-container'>
               <div id='item-index-header'>
                  Results
               </div>
               {items.map((item, i) => (<ItemIndexDiv item={item} key={item.id} />))}
            </div>
            <Footer/>
         </>

      )
   }
}

export default ItemIndex;