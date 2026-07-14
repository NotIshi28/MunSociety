import React from 'react'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import './Amigmun.css'
import committees from '../data/committees.json'
import collage from '../src/assets/collage.png'
const Amigmun = () => {

    const calculateTimeLeft = () => {
        const targetDate = new Date('2026-07-21T00:00:00');
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
    
        return () => clearInterval(timer); //clear interval if comp unmount
      }, []);

    const [activeTab, setActiveTab] = useState("AMIGMUN'26");
    return (
        <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='amigHead'>AMIGMUN ‘26 is Here!</div>
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
            </div>  */}


            <h1 className='sec'>Secretariat 2026</h1>

            <div className="sec-grp">
              <div className="sec-cards">
                  <b>Ms. Vandana P.</b>
                  <span>Chef de Cabinet</span>
              </div>
              <div className="sec-cards">
                  <b>Ms. Manisha Sharma</b>
                  <span>IT Head</span>
              </div>
              <div className="sec-cards">
                  <b>Ms. Shweta Ahluwalia</b>
                  <span>IP Head</span>
              </div>
              <div className="sec-cards">
                  <b>Parth Katoch</b>
                  <span>Secretary General</span>
              </div>
              <div className="sec-cards">
                  <b>Meet Kaur</b>
                  <span>Deputy Secretary General</span>
              </div>
              <div className="sec-cards">
                  <b>Vanya Saluja</b>
                  <span>USG Logistics</span>
              </div>
              <div className="sec-cards">
                  <b>Disha Dhir</b>
                  <span>USG Delegate Affairs</span>
              </div>
              <div className="sec-cards">
                  <b>Ayush Sharma</b>
                  <span>USG Technical Affairs</span>
              </div>
              <div className="sec-cards">
                  <b>Naitik Agarwal</b>
                  <span>USG Videography</span>
              </div>
              <div className="sec-cards">
                  <b>Ekam Sibia</b>
                  <span>Editor-in-Chief</span>
              </div>
              <div className="sec-cards">
                  <b>Sanvi Bhatia</b>
                  <span>Associate Editor</span>
              </div>
              <div className="sec-cards">
                  <b>Kashvi Sharma</b>
                  <span>Associate Editor</span>
              </div>

            </div>
            
            
            <div style={{width:'100%', height:'3.5vw', background: 'linear-gradient(90deg, #0578FF -5.97%, #5FA9FF 157.36%)', marginTop:'5vw'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#5FA9FF'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#a8cefa'}}></div>

            <h1 className='sec' style={{marginTop:'5vw'}}>Committees & Agendas 2026 </h1>

            <div className="com-grp">
              {committees.map((committee)=>(
                  <div className="com-card">
                    <div className="cname">{committee.name}</div>
                    <div className="agenda ltext" style={{marginBottom:"1vw", marginTop:"1vw"}}>Agenda: {committee.agenda}</div>
                    <div className="eb">
                      {committee.executiveBoard.chairperson && (
                        <div>
                          <b>Chairperson - </b>{committee.executiveBoard.chairperson}
                        </div>
                      )}
                      {committee.executiveBoard.coChairperson && (
                        <div>
                          <b>Co Chairperson - </b>{committee.executiveBoard.coChairperson}
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
                      {committee.executiveBoard.president && (
                        <div>
                          <b>President - </b>{committee.executiveBoard.president}
                        </div>
                      )}
                      {committee.executiveBoard.vicePresident && (
                        <div>
                          <b>Vice President - </b>{committee.executiveBoard.vicePresident}
                        </div>
                      )}
                      {committee.executiveBoard.presidentOfUSA && (
                        <div>
                          <b>President Of USA - </b>{committee.executiveBoard.presidentOfUSA}
                        </div>
                      )}
                      {committee.executiveBoard.vicePresidentOfUSA && (
                        <div>
                          <b>Vice President Of USA - </b>{committee.executiveBoard.vicePresidentOfUSA}
                        </div>
                      )}
                      {committee.executiveBoard.chiefOfRAW && (
                        <div>
                          <b>Chief of RAW - </b>{committee.executiveBoard.chiefOfRAW}
                        </div>
                      )}
                      {committee.executiveBoard.scribe && (
                        <div>
                          <b>Scribe - </b>{committee.executiveBoard.scribe}
                        </div>
                      )}
                    </div>
                    <div className="socials ltext">
                      <div>Whatsapp: <a target="_blank" rel="noopener noreferrer" href={committee.whatsapp}>Click Here</a></div>
                      <div>Matrix: <a target="_blank" rel="noopener noreferrer" href='https://docs.google.com/spreadsheets/d/1V2ifd6656mbRxVbN24UUou3RERRUsnyWmDObj8f-Ois/edit?usp=sharing'>Click Here</a></div>
                      <div>Background Guide: {committee.backgroundGuide ? <a target="_blank" rel="noopener noreferrer" href={committee.backgroundGuide}>Click Here</a> : 'Yet to be uploaded'} </div>
                    </div>
                  </div>
              ))}
            </div>
            
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#CDE4FF', marginTop:'5vw'}}></div>
            <div style={{width:'100%', height:'3.5vw', backgroundColor:'#5FA9FF'}}></div>
            <div style={{width:'100%', height:'3.5vw', background: 'linear-gradient(90deg, #0578FF -5.97%, #5FA9FF 157.36%)'}}></div>

            <h1 className='sec' style={{marginTop:'5vw'}}>Gallery</h1>

            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Py1GnMi2Jb0?si=XVA5PL74zERT4mvU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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