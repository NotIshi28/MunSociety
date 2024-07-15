import React from 'react'
import members from '../../data/members.json'
import './MemberGrid.css'
import { Component, Image } from "react";

export default class MemberGrid extends Component {
  render() {
    return (
      <div className="member-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <img style={{width:'100%'}} src={member.img} alt="Logo"/>
            <div className="card-text">
              <h3 className='ctext cname' >{member.name}</h3>
              <p className='ctext '  style={{marginBottom:'2vw'}} >{member.post}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
