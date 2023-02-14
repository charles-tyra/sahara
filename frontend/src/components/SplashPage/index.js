import React from "react";
import NavBar from "./NavBar";
import ItemIndexDiv from "./IndexPage/ItemIndexDiv";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import background from '../../assets/images/saharah_background.png'
import './SplashPage.css';
import BackgroundCarousel from "./IndexPage/BackgroundCarousel";

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
         <div id='background-color'></div>
         <NavBar />
         <BackgroundCarousel />
         {listItems}
      </>
   )
}

export default SplashPage;