import React from 'react'
import members from '../../data/members.json'
import nonCoreMembers from '../../data/noncoremembers.json'
import './MemberGrid.css'
import { Component, Image } from "react";

export default class MemberGrid extends Component {
  render() {
    return (
      <>
        <div className="member-grid">
          {members.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-photo">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="card-text">
                <h3 className='ctext cname'>{member.name}</h3>
                <p className='ctext'>{member.post}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="member-grid">
          {nonCoreMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="card-text">
                <h3 className='ctext cname' >{member.name}</h3>
                <p className='ctext '  style={{marginBottom:'1.8vw'}} >{member.post}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }
}