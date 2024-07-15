import React from 'react'
import './MemberGrid.css'
import mentors from '../../data/mentors.json'

const MentorGrid = () => {  
    return (
        <>
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