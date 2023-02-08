import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'
import logo from '../../assets/images/amazon_logo.png'
import ErrorDiv from './errorDiv';

function LoginForm() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   const checkEmail = () => {
      if (!email && errors && errors.includes('Enter your email')) {
         return true;
      }
      return false;
   };

   const checkPassword = () => {
      if (!password && errors && errors.includes('Enter your password')) {
         return true;
      }
      return false;
   };

   if (sessionUser) return <Redirect to="/" />;


   const handleSubmit = e => {
      e.preventDefault();

      setErrors([]);

      if (!password && !email) return setErrors(['Enter your email', 'Enter your password'])
      else if(!password) return setErrors(['Enter your password'])
      else if(!email) return setErrors(['Enter your email'])

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
         <ErrorDiv errors={errors} />
         <div id='login-page-container'>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
               <label className='amber-thick'>Email</label>
                  <br />
               <input
                  type='text'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className={checkEmail() ? 'error-border' : '' }
               />
               <br />
               <label className='amber-thick'>Password</label>
                  <br />
                  <input
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     className={checkPassword() ? 'error-border' : ''}
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