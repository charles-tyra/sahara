import React from "react";
import { Link } from "react-router-dom";
import './NavSearchBar.css';

function NavSearchBar() {

   return (
      <>
         <form id='search-form'>
            <input id='nav-search-input'></input>
               <Link to={`/items`}>
            <button type="submit" id='nav-bar-submit'/> 

               </Link>
         </form>
      </>
   )
}

export default NavSearchBar;