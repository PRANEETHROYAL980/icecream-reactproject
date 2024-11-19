import React from 'react'
import Hero31 from '../Hero3/Assets/Hero31.png'
import Hero32 from '../Hero3/Assets/Hero32.png'
import './Hero3.css'
const Hero3 = () => {
  return (
    <div>
      <div className='Hero3'>
        <div className='Hero3left'>
            <img src={Hero31}/>
        </div>
        <div className='Hero3middle'>
            <h1>Sign up For<span>Exclusive Deals</span>  and Updates</h1>
            <p>Get 10% off your next order and stay updated with our latest offers.</p>
            <div className='Hero3middle1'>
                <input type='gmail' placeholder='Enter Your Email address'/>
                <button>Subscribe</button>
            </div>
            <div className='Hero3middle2'>
                <p>I agree to the <span><u>Privacy Policy</u>.</span></p>
            </div>

        </div>
        <div className='Hero3right'>
            <img src={Hero32}/>
        </div>
      </div>
    </div>
  )
}

export default Hero3
