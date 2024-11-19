import React from 'react'
import Nav from '../../Component/Nav/Nav'
import User from '../../Component/User/User'
import AboutHero from '../../Component/AboutHero/AboutHero'
import Footer from '../../Component/footer/Footer'
const Aboutus = () => {
  return (
    <div>
      <div className='NavComponent'>
      <Nav/>
      </div>
      <AboutHero/>
      <User/>
      <Footer/>
    </div>
  )
}

export default Aboutus
