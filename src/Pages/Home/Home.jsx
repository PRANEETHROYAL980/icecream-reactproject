import React from 'react'
import Hero1 from '../../Component/Hero1/Hero1'
import Data from '../../Component/Api/Data'
import Hero2 from '../../Component/Hero2/Hero2'
import Bestseller from '../../Component/Bestseller/Bestseller'
import Hero3 from '../../Component/Hero3/Hero3'
import Total from '../../Component/Total/Total'
import Footer from '../../Component/footer/Footer'
import './Home.css'
import Nav from '../../Component/Nav/Nav'

const Home = () => {
  return (
    <div>
      <Hero1/>
      <Data/>
      <Hero2/>
      <Bestseller/>
      <Hero3/>
      <Total/>
      <Footer/>
    </div>
  )
}

export default Home
