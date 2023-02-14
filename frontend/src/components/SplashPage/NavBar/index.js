import React from "react";
import SessionActionButton from "./SessionActionButton";
import './NavBar.css'
import logo from '../../../assets/images/white_amazon_logo.png'
import cart from '../../../assets/images/shopping_cart.png'
import NavSearchBar from "./NavSearchBar";

function NavBar() {

   return (
      <>
         <div id='nav-bar'>
            <div id='left-nav-container'>
               <div id='nav-bar-logo-container'>
                  <a href='/'>
                     <img src={logo} id='nav-bar-logo' alt='' />
                  </a>
               </div>
               <div id='welcome-address-container'>
                  <h2 className='nav-bar-h2'>Welcome to sahara,</h2>
                  <div className="nav-bar-text">Make yourself at home</div>
               </div>
            </div>
            <div id='nav-search-container'>
               <NavSearchBar />
            </div>
            <div id='right-nav-container'>
               <div id='session-button-container'>
                  <SessionActionButton />
               </div>
               <div id='order-list-container'>
                  <h2 className="nav-bar-h2"> Returns </h2>
                  <div className='nav-bar-text'>& Orders</div>
               </div>
               <div id='cart-container'>
                  <div id='cart-number'>0</div>
                  <img src={cart} id='nav-bar-cart' alt="" />      
               </div>
            </div>
         </div>
         <div id='under-nav-bar'></div>
      </>
   )
}

export default NavBar;