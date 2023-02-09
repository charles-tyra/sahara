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
         <button onClick={handleLogout}>Log Out</button>
      )
   } else {
      return (
         <a href='/login' id='nav-login-link'>
            <div>
               <h2 id='nav-login-h2'>Hello,</h2>
               <button id='nav-login-button'>Sign in</button>
            </div>
         </a>
      )
   };
}

export default SessionActionButton;