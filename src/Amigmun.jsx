import React from 'react'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import './Amigmun.css'

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
            <div className='amigHead'>AMIGMUN ‘24 is Coming Soon!</div>
            <div className="lineGrp">
                <div className="l1"></div>
                <div className="l2"></div>
            </div>

            <div className="countdown">
                <div>
                    {timeLeft.days !== undefined ? (
                    <>
                        <span>{timeLeft.days} Days </span>
                        <span>{timeLeft.hours} Hours </span>
                        <span>{timeLeft.minutes} Minutes </span>
                        <span>{timeLeft.seconds} Seconds</span>
                    </>
                    ) : (
                    <span>Event has passed</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default Amigmun