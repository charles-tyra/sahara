import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './ItemIndex.css';
import ItemIndexDiv from "./ItemIndexDiv";
import { useLocation } from "react-router-dom";

function ItemIndex() {
   const dispatch = useDispatch();
   const location = useLocation();
   const items = useSelector(getItems);
   const [sortPriority, setSortPriority] = useState('test');

   useEffect(() => {
      dispatch(fetchItems(location.search));
   }, []);

   if (items === []) {
      return (
         <div>loading...</div>
      );
   } else {
      const params = new URLSearchParams(location.search);

      return (
         <>
            <div id='item-index-header'>
               <div id='header-container'>
                  <div id="results-container">
                     {items.length} results for&nbsp;<span id='search-placeholder'>"{params.toString().split('=').splice(1).join(' ').split('+').join(' ')}"</span>
                  </div>
                  <select id='search-select' value={``}> 
                     <option value=''> Sort by: {sortPriority}</option>
                  </select>
               </div>
            </div>
            <div id='item-index-page'>
               <div id='filter-sidebar'>
                  testing
               </div>
               <div id='item-index-item-container'>
                  <div id='item-index-item-header'>
                     
                  </div>
                  {items.map((item, i) => (<ItemIndexDiv item={item} key={item.id} />))}
               </div>
            </div>
         </>

      )
   }
}

export default ItemIndex;