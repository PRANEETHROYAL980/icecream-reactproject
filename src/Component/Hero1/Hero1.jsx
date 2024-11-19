import React from 'react'
import Nav from '../Nav/Nav'
import './Hero1.css'
import Hero1left from "../Hero1/Assets/Hero1left.png"
import Hero1right from '../Hero1/Assets/Hero1right.png'

const Hero1 = () => {
  return (
    <>
    <div className='Hero1'>
        <Nav/>
         <div className='Hero1-1'>
            <div className='Hero1-left'>
                <img src={Hero1left} alt=''/>
                <h3>___Welcome to The</h3>
                <h1>Discover <span>Sweet</span> Delights!</h1>
                <p>Relish the timeless taste of handcrafted ice cream, made with passion and the finest ingredients.</p>
                <button>Browse on for classic favour</button>
            </div>
            <div className='Hero1-right'>
                <img src={Hero1right} alt=''/>
            </div>
         </div>
    </div>
    </>
  )
}

export default Hero1
