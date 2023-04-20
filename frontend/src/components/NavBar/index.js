import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarts, getCarts } from "../../store/carts";
import { Link } from "react-router-dom";
import SessionActionButton from "./SessionActionButton";
import logo from '../../assets/images/sahara_white_text_2.png'
import cart from '../../assets/images/shopping_cart.png'
import './NavBar.css'
import NavSearchBar from "./NavSearchBar";


function NavBar() {
   const dispatch = useDispatch();
   const carts = useSelector(getCarts);
   
   useEffect(() => {
      dispatch(fetchCarts());
   }, [dispatch]);

   const getCartQuantity = () => {
      if(!carts) {
         return '';
      }
      let cartCount = 0;
      for(let i = 0; i < carts.length; i++) cartCount = cartCount + parseInt(carts[i].quantity);

      return cartCount;
   }

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
                  <Link to={`/carts`}>
                     <div id='cart-number'>{getCartQuantity()}</div>
                     <img src={cart} id='nav-bar-cart' alt="" />      
                  </Link>
               </div>
            </div>
         </div>

         <div id='under-nav-bar'>
            <div className="under-nav-filler">
               <a href="https://react-redux.js.org/api/provider">Provider</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://reactrouter.com/en/main/router-components/browser-router">BrowserRouter</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.w3schools.com/react/react_router.asp">Route</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://v5.reactrouter.com/web/api/Switch">Switch</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://redux.js.org/api/createstore">createStore</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://redux.js.org/api/combinereducers">combineReducers</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://redux.js.org/api/applymiddleware">applyMiddleware</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://redux.js.org/api/compose">compose</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://redux.js.org/usage/writing-logic-thunks">thunk</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.npmjs.com/package/redux-logger">logger</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.w3schools.com/react/react_useeffect.asp">useEffect</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://react-redux.js.org/api/hooks">useDispatch</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://react-redux.js.org/api/hooks">useSelector</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://react.dev">react</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://react-redux.js.org">redux</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">.js</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">.css</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.ruby-lang.org/en/">.rb</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.w3schools.com/react/react_jsx.asp">.jsx</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.puppet.com/docs/puppet/5.5/lang_template_erb.html">.erb</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.rubydoc.info/gems/jbuilder/Jbuilder">.jbuilder</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.json.org/json-en.html">.json</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://blog.saeloun.com/2022/08/16/understanding_gemfile_and_gemfile_lock">.lock</a>
            </div>
            <div className="under-nav-filler">
               <a href="https://www.markdownguide.org/basic-syntax/">.md</a>
            </div>
         </div>
      </>
   )
}

export default NavBar;