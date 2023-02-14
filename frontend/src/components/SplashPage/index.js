import React from "react";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './SplashPage.css';
import BackgroundCarousel from "./BackgroundCarousel";

function SplashPage() {
   const dispatch = useDispatch();
   const items = useSelector(getItems);
   console.log(items);

   useEffect(() => {
      dispatch(fetchItems());
   }, [dispatch]);

   return (
      <>
         <div id='background-color'/>
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