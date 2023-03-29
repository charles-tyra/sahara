import React from "react";
import { Route, Switch } from 'react-router-dom';
import ItemIndex from "./components/ItemIndex";
import LoginForm from './components/LoginForm/index';
import ShowPage from "./components/ShowPage";
import SignUpForm from './components/SignUpForm/index';
import SplashPage from "./components/SplashPage";
import NavBar from "./components/SplashPage/NavBar";

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
          </div>
        </Route>
        <Route path='/items'>
          <div className="page-container">
            <NavBar />
            <ItemIndex />
          </div>
        </Route>
        <Route exact path='/'>
          <div className='page-container'>
            <NavBar />
            <SplashPage />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
