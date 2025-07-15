import React, { useState } from 'react'
import './Navbar.css'
import { Link, redirect } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = ({activeTab, setActiveTab}) => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const tabs = ['Home', 'Team', "AMIGMUN'25", 'Achievements'];

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
                    <Link to={`/${tab.toLowerCase()}`} key={index} style={{textDecoration:'none', color:'black'}}>
                        <div
                            key={index}
                            onClick={() => {
                                setActiveTab(tab);
                                return redirect("/"+tab)
                            }}
                            style={{cursor: 'pointer'}}
                            className={ activeTab === tab ? 'element element-selected' : 'element'}
                        >
                            {tab}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
        
        <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
            {tabs.map((tab, index) => (
                <Link to={`/${tab.toLowerCase()}`} key={index} style={{textDecoration:'none', color:'black'}}>
                    <div
                        key={index}
                        onClick={() => {
                            setActiveTab(tab);
                            setIsMenuOpen(false);
                            return redirect("/"+tab)
                        }}
                        style={{cursor: 'pointer'}}
                        className={ activeTab === tab ? 'mobile-element mobile-element-selected' : 'mobile-element'}
                    >
                        {tab}
                    </div>
                </Link>
            ))}
        </div>
    </>
)
  
}

export default Navbar