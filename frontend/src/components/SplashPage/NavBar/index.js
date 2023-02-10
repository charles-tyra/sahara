import React from "react";
import SessionActionButton from "./SessionActionButton";
import './NavBar.css'
import logo from '../../../assets/images/white_amazon_logo.png'
import cart from '../../../assets/images/shopping_cart.png'

function NavBar() {

   return (
      <>
         <div id='nav-bar'>
            <div id='nav-bar-logo-container'>
               <a href='/'>
                  <img src={logo} id='nav-bar-logo' alt='' />
               </a>
            </div>
            <div id='session-button-container'>
               <SessionActionButton />
            </div>
            <div id='cart-container'>
               <div id='cart-number'>0</div>
               <img src={cart} id='nav-bar-cart' alt="" />      
            </div>
         </div>
      </>
   )
}

export default NavBar;