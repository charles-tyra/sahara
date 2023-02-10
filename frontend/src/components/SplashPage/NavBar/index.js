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
            <div id='nav-bar-logo-container'>
               <a href='/'>
                  <img src={logo} id='nav-bar-logo' alt='' />
               </a>
            </div>
            <div id='nav-search-container'>
               <NavSearchBar />
            </div>
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
      </>
   )
}

export default NavBar;