import alert from '../../assets/images/error_alert.png'

const ErrorDiv = ({errors}) => {
   if (
      (errors.includes('We cannot find an account with that email address') ||
      errors.includes('Your password is incorrect')) && 
      (!errors.includes('Enter your password') &&
      !errors.includes('Enter your email'))
   ) {
      return (
         <div id='error-div' className='error-border'>
            <img src={alert} id='alert' alt=''></img>
            <h3 id='error-heading'>There was a problem</h3>
            <div id='errors'>{errors}</div>
         </div>
      )
   }
   return null;
}

export default ErrorDiv;