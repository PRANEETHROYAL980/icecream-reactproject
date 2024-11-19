import React from 'react'
import './Footer.css'
import Hero1left from '../Footer/Assets/Hero1left.png'
import Navlogo1 from '../Footer/Assets/Navlogo1.png'
import Footer2 from '../Footer/Assets/Footer2.png'
import Footer1 from '../Footer/Assets/Footer1.png'
const Footer = () => {
  return (
    <div>
      <div className='Footer'>
        <img  className='Footer-img' src={Hero1left}/>
      
      <div className='Footer1'>
        <img src={Navlogo1}/>
      </div>
      <div className='Footer2'>
        <h1>Navigation</h1>
        <div className='Footer2-1'>
            <div>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                </ul>
            </div>
            <div>
                <ul>
                <li>Products</li>
                <li>Blog</li>
                <li>Contact</li>
                </ul>
            </div>
        </div>
       
      </div>
      <div className='Footer3'>
        <div>
            <h1>Address:</h1>
            <p>121 King Street Melbourne, 3000,Australia</p>
        </div>
        <div>
            <h1>Email:</h1>
            <p>info@example.com</p>
        </div>
      </div>
      <div className='Footer4'>
        <div className='Footer4-1'>
            <img src={Footer2}/>
            <div>
                <h1>+123456780123</h1>
                <p>Got Questions? Call us 24/7</p>
            </div>
        </div>
        <img src={Footer1}/>
      </div>
    </div>
    </div>
  )
}

export default Footer
