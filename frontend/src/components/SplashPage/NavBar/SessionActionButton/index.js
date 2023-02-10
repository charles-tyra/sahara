import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../../../store/session';
import './SessionActionButton.css'

function SessionActionButton() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);

   const handleLogout = (e) => {
      e.preventDefault();

      dispatch(sessionActions.logout());
   }

   if (sessionUser) {
      return (
         <div onClick={handleLogout} id='nav-login-link'> 
            <h2 id='nav-login-h2'>Hello, {sessionUser.firstName}</h2>
            <div id='nav-login-button'>Click to log out</div>
         </div>
      )
   } else {
      return (
         <a href='/login' id='nav-login-link'>
            <h2 id='nav-login-h2'>Hello, </h2>
            <div id='nav-login-button'>Click to sign in</div>
         </a>
      )
   };
}

export default SessionActionButton;