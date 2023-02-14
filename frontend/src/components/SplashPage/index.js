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
         <div id='background-color'/>
         <NavBar />
         <div id='carousel-container'>
            <BackgroundCarousel />
         </div>
         <div id='spacer-div' />
         <div id='themes-container'>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
            <div className="div-spacer">
               <div className='index-theme-container'> 
                  <h2 className='index-theme-h2'>Welcome to the base index</h2>
                  Base div.
               </div>
            </div>
         </div>
      </>
   )
}

export default SplashPage;