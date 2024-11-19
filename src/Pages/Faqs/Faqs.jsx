import React from 'react'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/footer/Footer'
import Accordion from '../../Component/Accordion/Accordion'
import { Link } from 'react-router-dom'

const Faqs = () => {
  return (
    <div>
      <Nav/>
      <div className='Abouthero'>
        <h1>Faq's</h1>
      <div className='Aboutsub'>
       <Link to="/"> <h2>Home</h2></Link>
        <h3>/</h3>
        <p>Faq's</p>
      </div>
    </div>
    <Accordion/>
    <Footer/>
    </div>
  )
}

export default Faqs
