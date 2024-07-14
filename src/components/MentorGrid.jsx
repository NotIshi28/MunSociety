import React from 'react'
import './MemberGrid.css'
import mentors from '../../data/mentors.json'

const MentorGrid = () => {  
    return (
        <>
            <h1 style={{color:'#0578FF', fontFamily: 'Poppins', fontSize: '3vw', fontWeight: 600, marginLeft: '15%', marginTop:'2vw'}} >Mentors</h1>
            <div className="member-grid">
            {mentors.map((member) => (
            <div key={member.id} className="member-card">
                <img style={{width:'100%'}} src={member.img} alt="Logo"/>
                <div className="card-text">
                    <h3>{member.name}</h3>
                    <p style={{marginBottom:'2vw'}} >{member.post}</p>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default MentorGrid