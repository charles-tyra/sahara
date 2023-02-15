import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './SplashPage.css';
import BackgroundCarousel from "./BackgroundCarousel";

function SplashPage() {
   const dispatch = useDispatch();
   const items = useSelector(getItems);

   useEffect(() => {
      dispatch(fetchItems());
   }, [dispatch]);

   if(!items) {
      return (
         null
      )
   } else {
   const colors = ['Blue', 'Black', 'Green', 'Beige', 'Colorful', 'White',
      'Purple', 'Red', 'Brown', 'Aqua', 'Yellow', 'Orange', 'Gray'];
   const themes = ['Garden', 'Outdoors', 'Living room', 'Kitchen',
      'Fancy', "Child's room", 'Expensive', 'Horror', 'Ocean Resort',
      'Party', 'School', 'Harmonious'];
   const selector = [colors, themes];

   const divThemes = [];

   while (divThemes.length < 3) {
      const randSelector = Math.floor(Math.random() * selector.length);
      const randType = Math.floor(Math.random() * selector[randSelector].length);
      const selected = selector[randSelector][randType];

      if (!divThemes.includes(selected)) divThemes.push([randSelector === 0 ? 'colors' : 'themes', selected]);
   };

   console.log(divThemes)
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
}

export default SplashPage;