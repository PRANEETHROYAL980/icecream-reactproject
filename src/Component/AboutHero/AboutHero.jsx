import React from 'react'
import './AboutHero.css'
import { Link } from 'react-router-dom'
const AboutHero = () => {
  return (
    <div className='Abouthero'>
        <h1>About Us</h1>
      <div className='Aboutsub'>
        <Link to="/"><h2>Home</h2></Link>
        <h3>/</h3>
        <p>About us</p>
      </div>
    </div>
  )
}

export default AboutHero
