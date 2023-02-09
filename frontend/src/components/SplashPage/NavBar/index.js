import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SessionActionButton from "./SessionActionButton";
import './NavBar.css'

function NavBar() {
   const dispatch = useDispatch();

   return (
      <>
         <div id='nav-bar'>
            <SessionActionButton />
         </div>
      </>
   )
}

export default NavBar;