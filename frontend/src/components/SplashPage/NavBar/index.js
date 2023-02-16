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
                  <h2 className='nav-bar-h2'>take off your shoes,</h2>
                  <div className="nav-bar-text">grab a seat on the rug</div>
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

         <div id='under-nav-bar'>
            <div className="under-nav-filler">
               Provider
            </div>
            <div className="under-nav-filler">
               BrowserRouter
            </div>
            <div className="under-nav-filler">
               Route
            </div>
            <div className="under-nav-filler">
               Switch
            </div>
            <div className="under-nav-filler">
               createStore
            </div>
            <div className="under-nav-filler">
               combineReducers
            </div>
            <div className="under-nav-filler">
               applyMiddleware
            </div>
            <div className="under-nav-filler">
               compose
            </div>
            <div className="under-nav-filler">
               thunk
            </div>
            <div className="under-nav-filler">
               logger
            </div>
            <div className="under-nav-filler">
               useEffect
            </div>
            <div className="under-nav-filler">
               useDispatch
            </div>
            <div className="under-nav-filler">
               useSelector
            </div>
            <div className="under-nav-filler">
               react
            </div>
            <div className="under-nav-filler">
               redux
            </div>
            <div className="under-nav-filler">
               .js
            </div>
            <div className="under-nav-filler">
               .css
            </div>
            <div className="under-nav-filler">
               .rb
            </div>
            <div className="under-nav-filler">
               .jsx
            </div>
            <div className="under-nav-filler">
               .erb
            </div>
            <div className="under-nav-filler">
               .jbuilder
            </div>
            <div className="under-nav-filler">
               .ru
            </div>
            <div className="under-nav-filler">
               .json
            </div>
            <div className="under-nav-filler">
               .lock
            </div>
            <div className="under-nav-filler">
               .md
            </div>
         </div>
      </>
   )
}

export default NavBar;