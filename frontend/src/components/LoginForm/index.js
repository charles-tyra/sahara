import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'
import logo from '../../assets/images/amazon_logo.png'
import alert from '../../assets/images/error_alert.png'

function LoginForm() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   if (sessionUser) return <Redirect to="/" />

   const ErrorDiv = () => {
      if (errors[0]) {
         return (
            <div id='error-div'>
               <img src={alert} id='alert'></img>
               <h3 id='error-heading'>There was a problem</h3>
               <div id='errors'>{errors}</div>
            </div>
         )
      } else {
         return (
            <div></div>
         )
      };
   }

   const handleSubmit = e => {
      e.preventDefault();

      setErrors([]);
      return dispatch(sessionActions.login({ email, password }))
         .catch(async res => {
            let data;
            try {
               data = await res.clone().json();
            } catch {
               data = await res.text();
            };
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
         });
   }

   const github = 'https://github.com/charles-tyra'
   const puppies = 'https://www.shutterstock.com/search/puppy?c3apidt=71700000027388020&gclid=CjwKCAiAioifBhAXEiwApzCztoRJEEKIyoTaWE07f1LTlGkZHNU9D9Rc-fwZ73LhyrgC-q3m_aZDlBoCHgYQAvD_BwE&gclsrc=aw.ds&kw='

   return (
      <div id='login-page'>
         <div id='nav-bar'>
            <img src={logo} id='nav-bar-logo' alt='' />
         </div>
         <ErrorDiv />
         <div id='login-page-container'>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
               <label className='amber-thick'>Email</label>
                  <br />
                  <input
                     type='text'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               <br />
               <label className='amber-thick'>Password</label>
                  <br />
                  <input
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
               <br />
               <button type='submit'>Continue</button>
            </form>
            <div id="privacy-notice">
               By continuing, you agree to Charles' <a href={github}>Github Data Folder
               </a> and <a href={puppies}>Puppy Emporium</a>.
            </div>
         </div>
         <div id='divider' />
         <div id='new-to'>New to Sahara?</div>
         <a href='/signup' id='signup-button'><button id='default-button'>Create your Sahara account</button></a>
      </div>
   )
}

export default LoginForm;