import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import tsLogo from "../src/assets/ts.svg"
import pic from "../src/assets/pic.svg"
import yt from "../src/assets/yt.svg"
import info from "../src/assets/info.png"

function App() {
  const url = 'https://techsyndicate.us'
  useEffect(() => {
    window.location.href = url;
 }, [url]);
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <>
      {/* <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <img src={pic} alt="" className='Hero'/>

      <svg width="100%" height="201" viewBox="0 0 1920 201" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="67" fill="#0578FF"/>
        <rect y="134" width="1920" height="67" fill="#CDE4FF"/>
        <rect y="67" width="1920" height="67" fill="#5FA9FF"/>
        <rect y="67" width="1920" height="67" fill="#5FA9FF"/>
      </svg>

      <div className="info">
        <div className="text">
          <div className="about">
            <h1 className="aboutHead">About Us</h1>
            <div className="aboutInfo">
              The MUN society is a prestigious society
              founded in 2016. This society is based
              on spirit of fraternity and stays the
              same in victory and loss. We believe in
              diplomacy and team spirit.
            </div>
          </div>
          <div className="aim">
            <h1 className="aboutHead">Our Aim</h1>
              <div className="aboutInfo">
              Model United Nations (MUN) is an academic simulation of the United Nations or any committee to educate participants about current affairs, international relations, diplomacy, teamwork & inculcates constructive discussions and solutions. The spirit of society is one of fraternity and we remain the same in both wins and losses
              </div>
          </div>
        </div>

        <div className="img">
          <img src={info} alt="" className='img1'/>
        </div>
      </div>

      <div style={{width:'100%', height:'3.5vw', backgroundColor:'#CDE4FF'}}></div>
      <div style={{width:'100%', height:'3.5vw', backgroundColor:'#5FA9FF'}}></div>

      <div className="contact">
        <div className="headCon">Contact Us</div>
        <div className="conInfo">
          vparashar@aisg46.amity.edu (Teacher In-charge)
          <br />
          manvi.yadav@ais.amity.edu   (Student In-charge)
        </div>
      </div>

      <div className="footer">
        <p className="headFooter">Our Social Links</p>
        <p className="footInfo">
          Do check our social pages to get updated for upcoming events. For more info these are our links given below.
        </p>
        <div className="socials1">

          <a href="https://www.instagram.com/munsocietyaisg46/">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30.6875" r="29.5" stroke="white"/>
              <circle cx="30" cy="30.6875" r="29.5" stroke="white"/>
              <path d="M29.4016 22.5852C24.8337 22.5852 21.0488 26.3048 21.0488 30.9379C21.0488 35.5711 24.7684 39.2907 29.4016 39.2907C34.0347 39.2907 37.7543 35.5058 37.7543 30.9379C37.7543 26.37 33.9695 22.5852 29.4016 22.5852ZM29.4016 36.2889C26.4651 36.2889 24.0506 33.8744 24.0506 30.9379C24.0506 28.0014 26.4651 25.587 29.4016 25.587C32.3381 25.587 34.7525 28.0014 34.7525 30.9379C34.7525 33.8744 32.3381 36.2889 29.4016 36.2889Z" fill="white"/>
              <path d="M38.0809 24.2819C39.126 24.2819 39.9733 23.4346 39.9733 22.3895C39.9733 21.3443 39.126 20.4971 38.0809 20.4971C37.0357 20.4971 36.1885 21.3443 36.1885 22.3895C36.1885 23.4346 37.0357 24.2819 38.0809 24.2819Z" fill="white"/>
              <path d="M42.9744 17.4953C41.2777 15.7334 38.8633 14.8198 36.1225 14.8198H22.6799C17.0026 14.8198 13.2178 18.6047 13.2178 24.2819V37.6593C13.2178 40.4653 14.1314 42.8798 15.9585 44.6417C17.7204 46.3383 20.0696 47.1867 22.7451 47.1867H36.0573C38.8633 47.1867 41.2125 46.2731 42.9091 44.6417C44.671 42.945 45.5846 40.5306 45.5846 37.7246V24.2819C45.5846 21.5412 44.671 19.192 42.9744 17.4953ZM42.7134 37.7246C42.7134 39.7475 41.9956 41.3789 40.8209 42.4883C39.6463 43.5976 38.015 44.1849 36.0573 44.1849H22.7451C20.7874 44.1849 19.156 43.5976 17.9814 42.4883C16.8068 41.3137 16.2195 39.6823 16.2195 37.6593V24.2819C16.2195 22.3242 16.8068 20.6928 17.9814 19.5182C19.0908 18.4089 20.7874 17.8216 22.7451 17.8216H36.1878C38.1455 17.8216 39.7769 18.4089 40.9515 19.5835C42.0608 20.7581 42.7134 22.3895 42.7134 24.2819V37.7246Z" fill="white"/>
            </svg>
          </a>

          <a href="https://www.youtube.com/watch?v=BV46b6M1Hps">
            <img src={yt} alt="" />
          </a>
        </div>

        <div className="ts">
          <div className="school">Amity International School Sector-46 © 2024</div>
          <div className="love">Made with 🤍 by Yuvraj & Ishit</div>
          <a href="https://techsyndicate.us" style={{width:'3vw', alignSelf:'center', marginBottom:'1vw'}}>
            <img src={tsLogo} alt="" style={{width:'3vw', alignSelf:'center', marginBottom:'1vw'}}/>
          </a> 
        </div>

      </div> */}




    </>
  )
}

export default App
