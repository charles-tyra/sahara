import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignUpForm.css'
import logo from '../../assets/images/amazon_logo.png'

function SignUpForm() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState([]);

   if (sessionUser) return <Redirect to="/" />

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
      <>
         <div id='nav-bar'>
            <img src={logo} id='nav-bar-logo' alt='' />
         </div>
         <div id='login-page-container'>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
               <ul>
                  {errors.map(error => <li key={error}>{error}</li>)}
               </ul>
               <label className='amber-thick'>
                  Your Name
                  <br />
                  <input
                     type='text'
                     value={name}
                     onChange={e => setName(e.target.value)}
                     className='amber-light'
                  />
               </label>
               <br />
               <label className='amber-thick'>
                  Email
                  <br />
                  <input
                     type='text'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     className='amber-light'
                  />
               </label>
               <br />
               <label>
                  Password
                  <br />
                  <input
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     required
                  />
               </label>
               <br />
               <button type='submit'>Continue</button>
            </form>
            <div className="amber-thin" id="privacy-notice">
               By creating an account, you agree to Charles' <a href={github}>Github informational center
               </a> and <a href={puppies}>Puppy emporium</a>
            </div>
         </div>
      </>
   )
}

export default SignUpForm;