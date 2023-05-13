import React, { useState } from "react";

import './NavSearchBar.css';
import Search from '../../../assets/images/search_icon.png'

function NavSearchBar() {
   const [search, setSearch] = useState('')

   return (
      <>
         <form action='/items' id='search-form'>
            <input type='text' name='search' id='item_search' value={search} onChange={e => setSearch(e.target.value)}/>
            <button type="submit" id='nav-bar-submit'>
               <img id='search-icon' src={Search}/>   
            </button> 
         </form>
      </>
   )
}

export default NavSearchBar;