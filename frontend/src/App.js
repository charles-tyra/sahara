import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
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
        <Route path='/items'>
          <NavBar />
          
        </Route>
        <Route path='/'>
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
