import React from 'react'
import Footer from '../../Component/footer/Footer'
import Total from '../../Component/Total/Total'
import Nav from '../../Component/Nav/Nav'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div>
        <Nav/>
        <div className='Abouthero'>
        <h1>Menu</h1>
      <div className='Aboutsub'>
        <Link to='/'><h2>Home</h2></Link>
        <h3>/</h3>
        <p>Menu</p>
      </div>
    </div>
        <Total/>
      <Footer/>
    </div>
  )
}

export default Search
