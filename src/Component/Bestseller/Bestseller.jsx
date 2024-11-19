import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './BestSeller.css'
 
const Bestseller = () => {
    const [state1,setstate1]=useState([])
    const getdata1 = async()=>{
      try{
        const data1 = await axios.get("https://icecream-project-server.onrender.com/BestSeller");
        setstate1(data1.data)
      }
      catch(error){
        console.log(error)
      }
    }
  
    // console.log(state)
    useEffect(()=>{getdata1()},[])
  return (
    <div className='seller'>
        <h1 className='seller-h1'>Our <span>Best</span> Sellers</h1>
        <p>Discover the favorites that keep our customers coming back for more.</p>
      <div className='Bestseller'>
        {
        state1.map((item,index)=>(
            <div key={index} className='Bestseller-sub'>
                <img src={item.image} alt="" />
                <h1>{item.main}</h1>
                <h2>{item.content}</h2>
                <h3>{item.price}</h3>
            </div>
        ))
        }
      </div>
    </div>
  )
}

export default Bestseller
