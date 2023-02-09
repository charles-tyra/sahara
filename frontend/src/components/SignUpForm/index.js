import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignUpForm.css'
import logo from '../../assets/images/amazon_logo.png'

function LoginForm() {
   const dispatch = useDispatch();
   const sessionUser = useSelector(state => state.session.user);

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errors, setErrors] = useState([]);

   if (sessionUser) return <Redirect to="/" />

   const submitDemoUser = (e) => {
      e.preventDefault();
      return dispatch(sessionActions.login({ email: 'charles.tyra@gmail.com', password: 'tobiedog'}))
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);

      let tempErrors = [];
      if (!name) tempErrors.push('Enter your name');
      if (!password) tempErrors.push('Minimum 6 characters required');
      else if (!confirmPassword) tempErrors.push('Type your password again');
      if (!email) tempErrors.push('Enter your email');

      if (password === confirmPassword) {
         return dispatch(sessionActions.signup({ email, name, password }))
            .catch(async (res) => {
               let data;
               try {
                  // .clone() essentially allows you to read the response body twice
                  data = await res.clone().json();
               } catch {
                  data = await res.text(); // Will hit this case if the server is down
               }
               if (data?.errors) {
                  for (let i = 0; i < data.errors.length; i++) {
                     tempErrors.push(data.errors[i]);
                  }
                  setErrors(tempErrors);
               } else if (data) {
                  tempErrors.push(data);
                  setErrors(tempErrors);
               } else setErrors([res.statusText]);
            });
      }
      return setErrors(['Confirm Password field must be the same as the Password field']);
   };

   const github = 'https://github.com/charles-tyra'
   const puppies = 'https://www.shutterstock.com/search/puppy?c3apidt=71700000027388020&gclid=CjwKCAiAioifBhAXEiwApzCztoRJEEKIyoTaWE07f1LTlGkZHNU9D9Rc-fwZ73LhyrgC-q3m_aZDlBoCHgYQAvD_BwE&gclsrc=aw.ds&kw='
   return (
      <div id='signup-page'>
         <div id='signup-amazon-container'>
            <a href='/'>
               <img src={logo} id='nav-bar-logo' alt='' />
            </a>
         </div>
         <div id='signup-page-container'>
            <h2 id='signup-page'>Create account</h2>
            <form onSubmit={handleSubmit}>
               <div className='signup-input-container'>
                  <label className='amber-thick'>Your name</label>
                  <input
                     type='text'
                     placeholder='First and last name'
                     value={name}
                     onChange={e => setName(e.target.value)}
                     className='signup-input'
                  />
               </div>
               <div className='signup-input-container'>
                  <label className='amber-thick'>Email</label>
                  <input
                     type='text'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     className='signup-input'
                  />
               </div>
               <div className='signup-input-container'>
                  <label className='amber-thick'>Password</label>
                  <input
                     type='password'
                     value={password}
                     placeholder='At least 6 characters'
                     onChange={e => setPassword(e.target.value)}
                     className='signup-input'
                  />
               </div>
               <div className='signup-input-container'>
                  <label className='amber-thick'>Re-enter password</label>
                  <input
                     type='password'
                     value={confirmPassword}
                     onChange={e => setConfirmPassword(e.target.value)}
                     className='signup-input'
                  />
               </div>
               <button type='submit' id='continue'>Verify email</button>
            </form>
            <button type='submit' onClick={submitDemoUser}>Demo User</button>
            <div id="privacy-notice">
               By creating an account, you agree to Charles' <br/><a href={github}>Github Data Folder
               </a> and <a href={puppies}>Puppy Emporium</a>.
            </div>
            <div id='gradient-divider' />
            <div>Already have an account? <a href='/login'>Sign in</a></div>
         </div>
      </div>
   )
}

export default LoginForm;