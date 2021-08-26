import React,{ useEffect, useState } from 'react';
import './home.scss';
import Navbar from '../header/header';
import bannerimage from './../../assets/Group 2661.png'
import comingSoon from './../../assets/oop.png'
import Footer from '../footer/footer';
import songThumbnail from './../../assets/icon.png'
import Audio from '../audio/audio';
import axios from 'axios';


function Home(){

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`09/10/${year}`) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60)
            };
          }

          return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [email, setEmail] = useState('');
    const [count, setCount] = useState(0);

    const emailChange = (e)=>{
        setEmail(e.target.value)
    }

    const register = ()=>{
        console.log(email)
        let data = {email} 
        if(email)
        axios.post('http://localhost:8080/api/emails',data).then(data=>{
            console.log('data',data)
        })
        setEmail('')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);

       

        return () => clearTimeout(timer);
      });

      const getHeadphoneCount = (value)=>{
        // if(value)
        setCount(value)
        // console.log(bars)
        //    setBars(Math.floor((value/2)*10))
      }

   return (
       <div className="home">
            <Navbar></Navbar>
            <div className="banner">
                <div className="banner-heading">
                    <div className="banner-image">
                      <img src={bannerimage} width="100%"/>
                    </div>
                </div>
                <div className="banner-register">
                    <p className="text-uppercase">Register</p>  
                    <div className="register-form">
                        <div className="form-field">
                          <input placeholder="Enter your email" type="email" onChange={e=>emailChange(e)} value={email}/>
                        </div>
                        <div className="form-button">
                          <button type="button" onClick={register}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="media">
                <div className="media-text">speak &nbsp;&nbsp;. &nbsp;&nbsp;share &nbsp;&nbsp;. &nbsp;&nbsp;listen</div>
                <div className="media-player">
                     <div className="media-header">
                        <div className="song-header">
                             <div className="song-avatar"></div>
                             <div className="song-title">
                                <p>@vrbl</p>
                                <p>19 July</p>
                             </div>
                        </div>
                        <div className="song-controls">
                               <button className="headphone-button"><i className="fas fa-headphones"></i> &nbsp;&nbsp;{count}</button>
                               <div className="dots"><i className="fas fa-ellipsis-v"></i></div>
                        </div>
                     </div>
                     <div className="media-details">
                        <div className="media-image"><img src={songThumbnail} /></div>
                        <div className="song-box">
                               <div className="song-text">A message from team Vrbl.</div>
                               <div className="song-player">
                               <Audio count={getHeadphoneCount}></Audio>
                               </div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="comingSoon">
                <div className="comingSoon-text">Collaborate.&nbsp;&nbsp;&nbsp;Make Announcements.&nbsp;&nbsp;&nbsp;Tell Your Story.&nbsp;&nbsp;&nbsp;Engage With The World.</div>
                <div className="comingSoon-image">
                    <img src={comingSoon} width="100%"/>
                </div>
                <div className="comingSoon-clock">
                      <p><span><i className="fab fa-apple"></i></span>&nbsp;&nbsp;Coming soon</p>
                      <div className="clocks">
                         <div className="clock">
                         <p className="time">{timeLeft.days}</p>
                         <p className="text-uppercase">DAYS</p>
                         </div>
                         <div className="clock">
                         <p className="time">{timeLeft.hours}</p>
                         <p className="text-uppercase">HRS</p>
                         </div>
                         <div className="clock">
                         <p className="time">{timeLeft.minutes}</p>
                         <p className="text-uppercase">Mins</p>
                         </div>
                      </div>
                </div>
             { /* <div style={}>Vrbl Social Pvt. Ltd.
   </div>*/}

            </div>
            <Footer></Footer>


       </div>
   )
}

export default Home;