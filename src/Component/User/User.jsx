import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './User.css'
const User = () => {
    const [user,setuser]=useState([]);
    const getuser = async()=>{
        try{
            const userdata = await axios.get("https://icecream-project-server.onrender.com/users");
            setuser(userdata.data)
        }
        catch(err){
            console.log(err)
        }
        
    }
    useEffect(()=>{getuser()},[])
  return (
    <div>
      <div className='user'>
        <div className='User-main'>
            {
                user.map((item,index)=>(
                    
                    <div key={index} className='User-sub'>
                        <img src={item.image}/>
                        <h1>{item.head}</h1>
                        <p>{item.body}</p>
                        <img className='user-img2' src={item.social}/>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default User
