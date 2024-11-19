import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Data.css'
const Data = () => {
  const [state,setstate]=useState([])
  const getdata = async()=>{
    try{
      const data = await axios.get("https://server-5rjg.onrender.com/category");
      setstate(data.data)
    }
    catch(error){
      console.log(error)
    }
  }

  // console.log(state)
  useEffect(()=>{getdata()},[])
  return (
    <>
    <div className='category-section'>
     <h1>Explore our<span> Categories</span></h1>
    <p>Browse through our different categories to find your favorite ice cream treats.</p>
    </div>
    <div className='Category'>
     
      {
        state.map((item,index)=>(
          <div key={index} className='Category-sub1' style={{backgroundImage: `url('${item.image}')`}} >
            <div className='Category-sub2'>
              <h1>{item.head}</h1>
              <img src={item.symbol} alt=''/>
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Data
