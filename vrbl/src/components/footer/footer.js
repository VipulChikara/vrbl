import React from 'react';
import './footer.scss';
import { useHistory } from "react-router-dom";

function Footer(){
    let history = useHistory();
  return (
      <div className="footer">
         <div className="footer-links">
             <button onClick={()=>history.push('/privacy')}>Privacy Policies</button>
             <button onClick={()=>history.push('/terms')}>Terms & Agreement</button>
             <button>Contact Us : <a href="mailto:customer.support@vrbl.co.in">customer.support@vrbl.co.in</a> </button>
         </div>
         <div className="social-links">
             <button><a href="mailto:customer.support@vrbl.co.in"><i className="fab fa-twitter"></i></a></button>
             <button> <a href="mailto:customer.support@vrbl.co.in"><i className="fab fa-linkedin"></i></a></button>
         </div>
      </div>
  )
}

export default Footer;