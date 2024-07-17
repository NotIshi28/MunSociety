import React from 'react'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import './Amigmun.css'
import committees from '../data/committees.json'
import collage from '../src/assets/collage.png'
const Amigmun = () => {

    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-07-24T00:00:00');
        const now = new Date();
        const difference = targetDate - now;
    
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
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        // Clear interval if component unmounts
        return () => clearInterval(timer);
      }, []);

    const [activeTab, setActiveTab] = useState("AMIGMUN'24");
    return (
        <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='amigHead'>AMIGMUN ‘24 is Here!</div>
            <div className="lineGrp">
                <div className="l1"></div>
                <div className="l2"></div>
            </div>

            {/* <div className="countdown">
                <div>
                    {timeLeft.days !== undefined ? (
                    <>
                        <span>{timeLeft.days} Days </span>
                        <span>{timeLeft.hours} Hours </span>
                        <span>{timeLeft.minutes} Minutes </span>
                        <span>{timeLeft.seconds} Seconds</span>
                    </>
                    ) : (
                    <span>o damn</span>
                    )}
                </div>
            </div> */}


            <h1 className='sec'>Secretariat</h1>

            <div className="sec-grp">
              <div className="sec-cards">
                  <b>Ms. Vandana P.</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >Chef de Cabinet</span>
              </div>
              <div className="sec-cards">
                  <b>Ms. Manisha Sharma</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >IT Head</span>
              </div>
              <div className="sec-cards">
                  <b>Shweta Ahluwalia</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >IP Head</span>
              </div>
              <div className="sec-cards">
                  <b>Aditya Rajesh Singh</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >Secretary General</span>
              </div>
              <div className="sec-cards">
                  <b>Samarth Bhargava</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >Deputy Secretary General</span>
              </div>
              <div className="sec-cards">
                  <b>Manvi Yadav</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >USG Logistics</span>
              </div>
              <div className="sec-cards">
                  <b>Rahil Kharbanda</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >USG Delegate Affairs</span>
              </div>
              <div className="sec-cards">
                  <b>Yuvraj Mehta</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >USG Technical Affairs</span>
              </div>
              <div className="sec-cards">
                  <b>Amogh Agrawal</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >USG Videography</span>
              </div>
              <div className="sec-cards">
                  <b>Ranya Sharma</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >Editor-in-Chief</span>
              </div>
              <div className="sec-cards">
                  <b>Devyanshi Goswami</b>
                  <span style={{fontSize:'1.2vw', fontWeight:'300'}} >Associate Editor</span>
              </div>

            </div>

            <div style={{width:'100%', height:'3.5vw', background: 'linear-gradient(90deg, #0578FF -5.97%, #5FA9FF 157.36%)', marginTop:'5vw'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#5FA9FF'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#CDE4FF'}}></div>

            <h1 className='sec' style={{marginTop:'5vw'}}>Committees</h1>

            <div className="com-grp">
              {committees.map((committee)=>(
                  <div className="com-card">
                    <div className="name" style={{fontSize:'1.5vw'}}>{committee.name}</div>
                    <div className="agenda ltext" style={{marginBottom:"1vw", marginTop:"1vw"}}>Agenda: {committee.agenda}</div>
                    <div className="eb">
                      {committee.executiveBoard.chairperson && (
                        <div>
                          <b>Chairperson - </b>{committee.executiveBoard.chairperson}
                        </div>
                      )}
                      {committee.executiveBoard.coChairperson && (
                        <div>
                          <b>Co Chairperson - </b>{committee.executiveBoard.coChairperson} <br />
                          <b>Co Chairperson - </b>{committee.executiveBoard.coChairperson1}
                        </div>
                      )}
                      {committee.executiveBoard.viceChairperson && (
                        <div>
                          <b>Vice Chairperson - </b>{committee.executiveBoard.viceChairperson}
                        </div>
                      )}
                      {committee.executiveBoard.rapporteur && (
                        <div>
                          <b>Rapporteur - </b>{committee.executiveBoard.rapporteur}
                        </div>
                      )}
                      {committee.executiveBoard.primeMinisterOfIndia && (
                        <div>
                          <b>Prime Minister Of India - </b>{committee.executiveBoard.primeMinisterOfIndia}
                        </div>
                      )}
                      {committee.executiveBoard.presidentOfIndia && (
                        <div>
                          <b>President Of India - </b>{committee.executiveBoard.presidentOfIndia}
                        </div>
                      )}
                      {committee.executiveBoard.moderator && (
                        <div>
                          <b>Moderator - </b>{committee.executiveBoard.moderator}
                        </div>
                      )}
                      {committee.executiveBoard.deputyModerator && (
                        <div>
                          <b>Deputy Moderator - </b>{committee.executiveBoard.deputyModerator}
                        </div>
                      )}
                    </div>
                    <div className="socials ltext">
                      <div>Whatsapp: <a target="_blank"  href={committee.whatsapp}>Click Here</a> </div>
                      <div>Matrix: <a target="_blank" href='https://docs.google.com/spreadsheets/d/1xgHD3FujmnzpVQOlsrXiqVfTCRGF-B1RQszLD4CFtIM/edit?usp=sharing'>Click Here</a></div>
                      <div>Background Guide: <a target="_blank" href={committee.backgroundGuide}>Click Here</a> </div>
                    </div>
                  </div>
              ))}
            </div>
            
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#CDE4FF', marginTop:'5vw'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#5FA9FF'}}></div>
            <div style={{width:'100%', height:'3.5vw', background: 'linear-gradient(90deg, #0578FF -5.97%, #5FA9FF 157.36%)'}}></div>

            <h1 className='sec' style={{marginTop:'5vw'}}>Gallery</h1>

            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/BV46b6M1Hps?si=WC96PVbpSh5XrP8E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="img">
              <img src={collage} alt="collage" style={{width:"80%"}}/>
            </div>

            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#CDE4FF', marginTop:'8vw'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#5FA9FF'}}></div>
            <div style={{width:'100%', height:'3.5vw', background: 'linear-gradient(90deg, #0578FF -5.97%, #5FA9FF 157.36%)'}}></div>
        </>
    )
}

export default Amigmun