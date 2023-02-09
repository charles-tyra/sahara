import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "./NavBar";


function SplashPage() {
   const dispatch = useDispatch();

   return (
      <>
         <NavBar />
      </>
   )
}

export default SplashPage;