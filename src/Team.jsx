import React from 'react'
import Navbar from './components/Navbar.jsx'
import { useState } from 'react'
import MemberGrid from './components/MemberGrid.jsx';
import AlumniGrid from './components/AlumniGrid.jsx';
import './Team.css'

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
                <button className='headButton' onClick={() => handleTabClick('Members')} style={{ color: selectedTab === 'Members' ? '#0578FF' : '#000' }}>Members</button>
                <button className='headButton' onClick={() => handleTabClick('Alumni')} style={{ color: selectedTab === 'Alumni' ? '#0578FF' : '#000' }}>Alumni</button>
            </div>
            {selectedTab === 'Members' && (
                <MemberGrid/>
            )}
            {selectedTab === 'Alumni' && (
                <AlumniGrid/>
            )}
        </>
    )
}


export default Team