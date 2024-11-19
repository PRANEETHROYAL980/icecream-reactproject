import React, { useState } from 'react'
import './Nav.css'
import Navlogo from '../Nav/Assets/Navlogo.png'
import Navlink1 from '../Nav/Assets/Navlink1.png'
import Navlink2 from '../Nav/Assets/Navlink2.png'
import { Link } from 'react-router-dom'
import Hero1left from '../Nav/Assets/Hero1left.png'
const Nav = () => {
    const [ham,setham]=useState(false);
    function hamburg(){
        setham(!ham);
        console.log(ham)
    }
    const [Contact,setcontact]=useState(false)
    function handlecontact(){
      setcontact(!Contact)
    }
  return (
    <>
    <div className='Navbar'>
    <img src={Navlogo} alt='Logo'/>
    <div className={`${ham?'Navlinks':'Navlink'}`}>
        
        <h1  onClick={()=>console.log("cliked")}><Link to='/'>Home</Link></h1>
        <h1 onClick={()=>console.log("cliked")}> <Link to='/Aboutus'>About us</Link></h1>
        <h1  onClick={()=>console.log("cliked")}><Link to='/Blogs'>Blog</Link></h1>
        <h1  onClick={()=>console.log("cliked")}><Link to='/Faqs'>Faq's</Link></h1>
        <div className='navimgs'>
        <Link to='/search'  onClick={()=>console.log("cliked")}> <img src={Navlink1} alt=''/></Link>
        <img src={Navlink2} alt=''/>
        </div>
        <button onClick={handlecontact}>Contact us</button>
    </div>
    <div className= {`${ham?'Hamupd':'Ham'}`} onClick={hamburg} >
        <div className='Line1'></div>
        <div className='Line2'></div>
        <div className='Line3'></div>
        
    </div>
    </div>
    {
      Contact &&  <div className='Contact'>
        <img src={Hero1left}/>
        <p>Enter Your Mail we will Reach out You, through it.</p>
        <input type='gmail' placeholder='Enter Your Mail '/>
        <button onClick={()=>(alert("Your Mail Has been submited sucessfully"))}>Submit</button>
        <h1>Or</h1>
        <h2>Contact Us through</h2>
        <h3>+123456780123</h3>
        <h4 onClick={handlecontact}>x</h4>
      </div>
    }
   
    </>
  )
}

export default Nav
