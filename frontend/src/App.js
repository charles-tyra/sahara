import React from "react";
import { Route, Switch } from 'react-router-dom';
import ItemIndex from "./components/ItemIndex";
import LoginForm from './components/LoginForm/index';
import ShowPage from "./components/ShowPage";
import SignUpForm from './components/SignUpForm/index';
import SplashPage from "./components/SplashPage";
import NavBar from "./components/NavBar";
import CartIndex from "./components/CartIndex";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Switch>
        <Route path='/login'>
          <div className='page-container'>
            <LoginForm />
          </div>
        </Route>
        <Route path='/signup'>
          <div className='page-container'>
            <SignUpForm />
          </div>
        </Route>
        <Route path='/items/:itemId'>
          <div className='page-container'>
            <NavBar />
            <ShowPage />
            <Footer />
          </div>
        </Route>
        <Route path='/items'>
          <div className="page-container">
            <NavBar />
            <ItemIndex />
            <Footer />
          </div>
        </Route>
        <Route path='/carts'>
          <div className="page-container">
            <NavBar />
            <CartIndex />
            <Footer />
          </div>
        </Route>
        <Route exact path='/'>
          <div className='page-container'>
            <NavBar />
            <SplashPage />
            <Footer />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
