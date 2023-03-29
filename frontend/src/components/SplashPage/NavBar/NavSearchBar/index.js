import React from "react";
import { Link } from "react-router-dom";
import './NavSearchBar.css';
import Search from '../../../../assets/images/search_icon.png'

function NavSearchBar() {

   return (
      <>
         <form id='search-form'>
            <input id='nav-search-input' />
               <Link to={`/items`}>
                  <button type="submit" id='nav-bar-submit'>
                     <img id='search-icon' src={Search}/>   
                  </button> 
               </Link>
         </form>
      </>
   )
}

export default NavSearchBar;