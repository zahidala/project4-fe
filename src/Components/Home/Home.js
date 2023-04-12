import React, { Component } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
        <>
      <div className='first'>
        <p className='para'>The ultimate travel companion for exploring new<br/>destinations and experiencing unforgettable adventure!</p>
        <Link to="/header"><button className='explore'>Explore Now</button></Link>
      </div>

      <div className='second'>
        <h2 className='h2'>Discover New Destinations</h2>
        <div className='cards'>
            <div className='card card1'>
                <p className='p'>Restaurants</p>
            </div>
            <div className='card card2'>
                <p className='p'>Hotels</p>
            </div>
            <div className='card card3'>
                <p className='p'>Attractions</p>
            </div>
        </div>
      </div>
      </>
    )
  }
}
