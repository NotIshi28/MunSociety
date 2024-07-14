import React from 'react'
import './Navbar.css'
import { Link, redirect } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = ({activeTab, setActiveTab}) => {

const tabs = ['Home', 'Team', "AMIGMUN'24", 'Achievements'];

return (
    <>
        <div className="group" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center', width: '100%',boxSizing: 'border-box', marginTop:"1vw", marginBottom:"1vw"}}>
            <div className='logo' style={{width:30}}>
                <img style={{width: 105.6, height: 92.8, marginLeft: "1vw"}} src={logo} />
            </div>
            
            <div className="elements">
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
    </>
)
  
}

export default Navbar