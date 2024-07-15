import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import MemberGrid from './components/MemberGrid.jsx';
import AlumniGrid from './components/AlumniGrid.jsx';
import './Team.css'
import Footer from './components/Footer.jsx';
import MentorGrid from './components/MentorGrid.jsx';

const Team = () => {
    const [activeTab, setActiveTab] = useState('Team');
    const [selectedTab, setSelectedTab] = useState('Members')
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
      };
    return (
        <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className='heading'>
                <button className='headButton' onClick={() => handleTabClick('Members')} style={selectedTab === 'Members' ? {background: "linear-gradient(90deg, #0578FF 0.01%, #8CC1FF 212%)",backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"} :{color: '#ADADAD'}}>Members</button>
                <button className='headButton' onClick={() => handleTabClick('Alumni')} style={selectedTab === 'Alumni' ? {background: "linear-gradient(90deg, #0578FF 0.01%, #8CC1FF 212%)",backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"} :{color: '#ADADAD'}}>Alumni</button>
            </div>
            {selectedTab === 'Members' && (
                <>
                    <MemberGrid />
                    <h1 className='heading' style={{background: "linear-gradient(90deg, #0578FF 0.01%, #8CC1FF 212%)",backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"} }>Mentors</h1>
                    <MentorGrid />
                    <footer className='lG'>
                        <div className="ln1"></div>
                        <div className="ln2"></div>
                        <div className="ln3"></div>
                    </footer>
                </>
            )}
            {selectedTab === 'Alumni' && (
                <>
                    <AlumniGrid />
                    <Footer/>
                </>
            )}

        </>
    )
}


export default Team