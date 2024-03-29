import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, fetchItems } from "../../store/items";
import './SplashPage.css';
import BackgroundCarousel from "./BackgroundCarousel";
import SplashItemDiv from "./SplashItemDiv";

function SplashPage() {
   const dispatch = useDispatch();
   const items = useSelector(getItems);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      dispatch(fetchItems());

      if(items !== []) setLoading(false);
   }, [dispatch]);

   if (loading) {
      return (
         <div>loading...</div>
      )
   } else {

   const colors = ['Blue', 'Black', 'Green', 'Beige', 'Colorful', 'White',
      'Purple', 'Red', 'Brown', 'Aqua', 'Yellow', 'Orange', 'Gray'];
   const themes = ['Garden', 'Outdoors', 'Living room', 'Kitchen',
      'Fancy', "Child's room", 'Expensive', 'Horror', 'Ocean',
      'Party', 'School', 'Harmonious'];
   
   const selector = [colors, themes];

   const divThemes = [];
   while (divThemes.length < 8) {
      const randSelector = Math.floor(Math.random() * selector.length);
      const randType = Math.floor(Math.random() * selector[randSelector].length);
      const selected = selector[randSelector][randType];

      let alreadySelected = false;
      for(let i = 0; i < divThemes.length; i++) {
         if (divThemes[i][1] === selected) alreadySelected = true;
      }
      if (!alreadySelected) divThemes.push([randSelector === 0 ? 'colors' : 'theme', selected]);
   };

   const indexDivs = [];
   while(indexDivs.length < divThemes.length) indexDivs.push([]);
   for(let i = 0; i < items.length; i++) {
      for(let j = 0; j < divThemes.length; j++) {
         if (items[i][divThemes[j][0]].includes(divThemes[j][1])) indexDivs[j].push(items[i]);
      }
   }

   if(items !== []) {
   return (
      <>
         <div id='background-color' />
         <div id='carousel-container'>
            <BackgroundCarousel key='Carousel' />
         </div>
         <div id='themes-container'>
            {indexDivs.map((div, i) => {
               return (
                  <div className="div-spacer">
                     <SplashItemDiv key={i} divItems={div} theme={divThemes[i][1]} />
                  </div>
               )
            })}
         </div>
      </>
   )} 
   }
}

export default SplashPage;