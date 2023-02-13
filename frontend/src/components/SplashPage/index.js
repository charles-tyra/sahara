import React from "react";
import NavBar from "./NavBar";
import ItemIndexDiv from "./ItemIndexDiv";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";




function SplashPage() {
   const dispatch = useDispatch();
   const items = useSelector(getItems);
   console.log(items);

   useEffect(() => {
      dispatch(fetchItems());
   }, [dispatch]);

   const listItems = items.map(item => <ItemIndexDiv key={item.id} item={item} />);
   console.log(listItems);

   return (
      <>
         <NavBar />
         {listItems}
      </>
   )
}

export default SplashPage;