import React from 'react'
import members from '../../data/alumni.json'
import './AlumniGrid.css'
import { Component } from "react";

export default class AlumniGrid extends Component {
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
