import React from 'react';
import './Footer.css'

function Footer() {

   return (
      <>
         <div id='to-the-top'>Back to top</div>
         <div id='footer-container'>
            <div className="footer">
               <h2>Languages</h2>
               React <br/> Javascript <br/> Ruby <br/> Rails <br/> CSS
            </div>
            <div className="footer">
               <h2></h2>
            </div>
            <div className="footer">
               <h2>Previous town names</h2>
               Hersheyvill <br/> Caliban
            </div>
            <div className="footer">

            </div>
         </div>
         <div id='footer-divider'/>
      </>
   )
}

export default Footer;