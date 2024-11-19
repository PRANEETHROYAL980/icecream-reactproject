import React from 'react'
import Nav from '../../Component/Nav/Nav'
import Footer from '../../Component/footer/Footer'
import Bestseller from '../../Component/Bestseller/Bestseller'
import Hero2 from '../../Component/Hero2/Hero2'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div>
     <Nav/>
     <div className='Abouthero'>
        <h1>Blog</h1>
      <div className='Aboutsub'>
      <Link to="/"><h2>Home</h2></Link>
        <h3>/</h3>
        <p>Blog</p>
      </div>
    </div>
    <Hero2/>
    <Bestseller/>
    <Footer/>
    </div>
  )
}

export default Blogs
