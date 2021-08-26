import React,{Fragment} from 'react';
import './about.scss';
import Navbar from '../header/header';
import Footer from '../footer/footer';

function About(){
  return (
      <Fragment>
      <Navbar></Navbar>
      <div className="about">
         <div className="about-card">
             <p className="about-heading">Enter header text here</p>
             <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.””Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
         </div>
      </div>
      <Footer></Footer>
      </Fragment>
  )
}

export default About;