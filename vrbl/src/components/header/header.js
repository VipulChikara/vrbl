import React from 'react';
import './header.scss';
import { useHistory,useLocation } from "react-router-dom";
import $ from 'jquery';


function Navbar(){
    const history = useHistory();
    const location = useLocation();

    const scroll = ()=>{
        // ) history.push('/')
        if(location.pathname=='/'){
            $('html, body').animate({
                scrollTop: $(".comingSoon-clock").offset().top
            }, 2000);
        } 
        
    }
  return (
      <div className="header">
         <div className="header-name" onClick={()=>history.push('/')}>vrbl</div>
         <div className="header-links">
             <button onClick={()=>history.push('/about')}>About us</button>
             <button onClick={()=>scroll()}><span><i className="fab fa-apple"></i></span> &nbsp;&nbsp; Coming soon</button>
         </div>
      </div>
  )
}

export default Navbar;