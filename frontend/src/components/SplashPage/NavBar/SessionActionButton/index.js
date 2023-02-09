import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from '../../../../store/session';

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
         <a href='/login'>
            <button>Sign in</button>
         </a>
      )
   };
}

export default SessionActionButton;