import React from 'react'
import './Hero2.css'
import Hero2left1 from '../Hero2/Assets/Hero2left1.png'
import Hero2left2 from '../Hero2/Assets/Hero2left2.png'
import Hero2right1 from '../Hero2/Assets/Hero2right1.png'
import Hero2right2 from '../Hero2/Assets/Hero2right2.png'


const Hero2 = () => {
  return (
    <div>
      <div className='Hero2'>
        <div className='Hero2left'>
            <div className='Hero2left1'>
                <img src={Hero2left1}/>
                <img src={Hero2left2}/>
            </div>
            <div className='Hero2left2'>
                <h1>Summer Special !</h1>
                <h3>Buy One Sundae, Get One 50% Off!</h3>
                <button>Get THis Deal</button>
                <p>Use code: SUMMER50 at checkout.</p>
            </div>
        </div>
        <div className='Hero2right'>
            <div className='Hero2right1'>
                <div className='Hero2circle'>
                    <h1>50% OFF</h1>
                </div>
                <img src={Hero2right2}/>
            </div>
            <div className='Hero2right2'>
                <img src={Hero2right1}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2
