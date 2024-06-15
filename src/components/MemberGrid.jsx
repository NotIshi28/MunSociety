import React from 'react'
import members from '../../data/members.json'
import './MemberGrid.css'
import { Component } from "react";

export default class MemberGrid extends Component {
  render() {
    return (
      <div className="member-grid">
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <h3>{member.name}</h3>
            <p style={{marginBottom:'2vw'}} >{member.post}</p>
          </div>
        ))}
      </div>
    )
  }
}
