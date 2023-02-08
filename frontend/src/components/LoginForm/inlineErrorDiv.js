import mark from '../../assets/images/red_exc.png'

const InlineErrorDiv = ({errors, boolean, variable}) => {
   if (boolean) {
      if (errors.includes('Enter your email') && variable === 'email') {
         return (
            <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Enter your email</div>
         )
      } else {
      return (
         <div className='inline-error-div'><img src={mark} className='error-mark' alt=''></img>Enter your password</div>
      )
      }
   } 
}

export default InlineErrorDiv;