import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session';


function SplashPage() {
   const dispatch = useDispatch();

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch(sessionActions.logout());
   }

   return (
      <>
         <a href="/login">Log In</a>
         <br />
         <a href="/signup">Sign Up</a>
         <button onClick={handleLogout}>Log Out</button>
      </>
   )
}

export default SplashPage;