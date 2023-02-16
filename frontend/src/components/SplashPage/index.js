import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './SplashPage.css';
import BackgroundCarousel from "./BackgroundCarousel";
import ItemIndexDiv from "./ItemIndexDiv";

function SplashPage() {
   const dispatch = useDispatch();
   const items = useSelector(getItems);

   useEffect(() => {
      dispatch(fetchItems());
   }, [dispatch]);

   if(items === []) {
      return (
         <div>loading..</div>
      )
   } else {
      const colors = ['Blue', 'Black', 'Green', 'Beige', 'Colorful', 'White',
         'Purple', 'Red', 'Brown', 'Aqua', 'Yellow', 'Orange', 'Gray'];
      const themes = ['Garden', 'Outdoors', 'Living room', 'Kitchen',
         'Fancy', "Child's room", 'Expensive', 'Horror', 'Ocean Resort',
         'Party', 'School', 'Harmonious'];
      const selector = [colors, themes];

      const divThemes = [];
      while (divThemes.length < 8) {
         const randSelector = Math.floor(Math.random() * selector.length);
         const randType = Math.floor(Math.random() * selector[randSelector].length);
         const selected = selector[randSelector][randType];

         if (!divThemes.includes(selected)) divThemes.push([randSelector === 0 ? 'colors' : 'theme', selected]);
      };

      const indexDivs = [[],[],[],[],[],[],[],[]];
      for(let i = 0; i < items.length; i++) {
         for(let j = 0; j < divThemes.length; j++) {
            if (items[i][divThemes[j][0]].includes(divThemes[j][1])) indexDivs[j].push(items[i]);
         }
      }

      console.log(items);
      console.log(divThemes);
      console.log(indexDivs);

      return (
         <>
            <div id='background-color'/>
            <div id='carousel-container'>
               <BackgroundCarousel />
            </div>
            <div id='spacer-div' />
            <div id='themes-container'>
               <div className="div-spacer">
                  <ItemIndexDiv divItems={indexDivs[0]} theme={divThemes[0][0]}/>
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