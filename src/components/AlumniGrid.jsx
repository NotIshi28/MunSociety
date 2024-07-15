import React from 'react'
import members from '../../data/alumni.json'
import './AlumniGrid.css'
import { Component } from "react";

export default class AlumniGrid extends Component {
  render() {
    return (
      <div className="member-grid" style={{marginBottom:'12.1vw'}}>
        {members.map((member) => (
          <div key={member.id} className="member-card">
            <h3 className='ctext cname' >{member.name}</h3>
            <p className='ctext'  style={{marginBottom:'3vw'}} >{member.post}</p>
          </div>
        ))}
      </div>
    )
  }
}
