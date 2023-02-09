import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/index';
import SignUpForm from './components/SignUpForm/index';
import { logout } from "./store/session";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

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
          <button onClick={handleLogout}>Log Out</button>
        </Route>
      </Switch>
    </>
  );
}

export default App;
