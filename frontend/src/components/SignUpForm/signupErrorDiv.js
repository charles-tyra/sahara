import mark from '../../assets/images/red_exc.png'

const SignupErrorDiv = ({errors, boolean, variable}) => {
   if (boolean) {
      if (variable === 'email') {
         return (
            <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Enter your email</div>
         )
      } else if (variable === 'password') {
         return (
            <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Minimum 6 characters</div>
         )
      } else if (variable === 'confirmPassword' && errors.includes('Confirm Password field must be the same as the Password field')) {
         return (
            <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Passwords must match</div>
         )
      } else if (variable === 'name') {
         return (
            <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Enter your full name </div>
         )
      } else {
         return (
            <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Type your password again</div>
         )
      }
   } else {
      return null;
   }
}

export default SignupErrorDiv;