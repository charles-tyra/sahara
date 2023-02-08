import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import SignUpForm from './components/SignUpForm/index'

function App() {
  return (
    <>
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignUpForm />
        </Route>
        <Route path='/'>
          <a href="/login">Log In</a>
          <br />
          <a href="/signup">Sign Up</a>
        </Route>
      </Switch>
    </>
  );
}

export default App;
