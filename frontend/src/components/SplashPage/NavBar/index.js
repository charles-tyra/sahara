import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../../store/session'
import SessionActionButton from "./SessionActionButton";
import './NavBar.css'

function NavBar() {
   const dispatch = useDispatch();

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch(sessionActions.logout());
   }

   return (
      <>
         <div id='nav-bar'>
            <SessionActionButton />
         </div>
      </>
   )
}

export default NavBar;