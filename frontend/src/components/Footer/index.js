import React from 'react';
import './Footer.css'

function Footer() {

   return (
      <>
         <div id='to-the-top' onClick={() => window.scrollTo({top:0, behavior: 'instant'})}>Back to top</div>
         <div id='footer-container'>
            <div className="footer">
               <h2>Previous towns</h2>
               Hersheyvill <br/> Caliban <br/> Elizaville
            </div>
            <div className="footer">
               <h2>Languages</h2>
               React <br/> Javascript <br/> Ruby <br/> CSS
            </div>
            <div className="footer">
               <h2>Gemfiles</h2>
               byebug <br/>bcrypt <br/>ruby '3.1.1' <br/>rails '7.0.4' <br/>aws-sdk-s3
            </div>
            <div className="footer">
               <h2>Contact me</h2>
               <a href='https://github.com/charles-tyra'>Github</a> <br/>
               <a href='https://github.com/charles-tyra'>Linked-in</a>
            </div>
         </div>
         <div id='footer-divider'/>
      </>
   )
}

export default Footer;