import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = ({activeTab, setActiveTab}) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isArchiveOpen, setIsArchiveOpen] = useState(false);
const archiveYears = ['2025'];
const tabs = [{ name: 'Home', path: '/' }, { name: 'Team', path: '/team' }, { name: "AMIGMUN'26", path: '/amigmun' }, { name: 'Achievements', path: '/achievements' }];

return (
    <>
        <div className="group" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', width: '96%',boxSizing: 'border-box', marginTop:"1vw", marginBottom:"1vw",}}>
            <div className='logo' style={{width:'9vw', marginLeft: "2vw"}}>
                <img className="logo-img" style={{width: '5vw',aspectRatio:'1.13'}} src={logo} />
            </div>
            
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className={isMenuOpen ? 'active' : ''}></span>
                <span className={isMenuOpen ? 'active' : ''}></span>
                <span className={isMenuOpen ? 'active' : ''}></span>
            </div>
            
            <div className="elements desktop-nav">
                {tabs.map((tab, index) => (
                    <Link to={tab.path} key={index} style={{textDecoration:'none', color:'black'}}>
                        <div
                            onClick={() => {
                                setActiveTab(tab.name);
                            }}
                            style={{cursor: 'pointer'}}
                            className={ activeTab === tab.name ? 'element element-selected' : 'element'}
                        >
                            {tab.name}
                        </div>
                    </Link>
                ))}

                  {/* archive dropdown | desktop */}
                  <div className="archive-dropdown">
                      <div
                        className={'element archive-dropdown-trigger'}
                        style={{cursor: 'pointer'}}
                      >
                        <span style={activeTab === 'Archive' ? {textDecoration:'underline #8CC1FF 5px', textUnderlinePosition:'under'} : {}}>Archive</span><span className="arrow">▼</span>
                      </div>
                      <div className="archive-dropdown-menu">
                        {archiveYears.map((year) => (
                            <Link to={`/amigmun/${year}`} key={year} style={{textDecoration:'none', color:'black'}} onClick={() => setActiveTab('Archive')}>
                                <div className="archive-dropdown-item">{year}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            {tabs.map((tab, index) => (
                <Link to={tab.path} key={index} style={{textDecoration:'none', color:'black'}}>
                    <div
                        onClick={() => {
                            setActiveTab(tab.name);
                            setIsMenuOpen(false);
                        }}
                        style={{cursor: 'pointer'}}
                        className={ activeTab === tab.name ? 'mobile-element mobile-element-selected' : 'mobile-element'}
                    >
                        {tab.name}
                    </div>
                </Link>
            ))}

              {/* archive dropdown | mobile */}
              <div 
                  className={activeTab === 'Archive' ? 'mobile-element mobile-element-selected' : 'mobile-element'}
                  onClick={() => setIsArchiveOpen(!isArchiveOpen)}
                  style={{cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
              >
                  <span>Archive</span>
                  <span style={{fontSize: '14px'}}>{isArchiveOpen ? '▲' : '▼'}</span>
              </div>
              {isArchiveOpen && archiveYears.map((year) => (
                  <Link to={`/amigmun/${year}`} key={year} style={{textDecoration:'none', color:'black'}}>
                      <div
                        onClick={() => {
                            setActiveTab('Archive');
                            setIsMenuOpen(false);
                        }}
                        className="mobile-element mobile-sub-element"
                        style={{paddingLeft: '50px'}}
                      >
                        {year}
                    </div>
                </Link>
            ))}
        </div>
    </>
)
}

export default Navbar