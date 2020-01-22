import React, { Component } from 'react'
import '../App.css'
import people from '../images/people.svg'

export class SideBar extends Component {

    render() {
        return (
            <div className = 'rectagle4'>
                    <div className="userIconContainer">
                        <div align="center">
                            <img src={people} alt="people"/>
                        </div>
                    </div>
              </div>
        )
    }
}