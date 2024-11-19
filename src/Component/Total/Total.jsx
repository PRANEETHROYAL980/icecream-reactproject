import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Total.css'

const Total = () => {
    const [state2, setstate2] = useState([])
    const getdata2 = async () => {
        try {
            const data2 = await axios.get("https://icecream-project-server.onrender.com/total");
            setstate2(data2.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    // console.log(state)
    useEffect(() => { getdata2() }, [])
    const icecream = state2.filter(item => (item.type === "Ice cream"));
    const milkshake = state2.filter(item => (item.type === "Milkshake"));

    const [type, settype] = useState("Total");
    function handlechange(e) {
        let a = e.target.value;
        settype(a)
    }
    return (
        <div >
            <h1 className='menu'>Menu</h1>
            <div className='Total-main'>
                <button value='Total' onClick={handlechange}>Total Items</button>
                <button value='icecream' onClick={handlechange}>IceCreams</button>
                <button value='milkshake' onClick={handlechange}> Milkshakes</button>
            </div>
            {type === 'Total' && <div className='Total'>
                {
                    state2.map((item, index) => (
                        <div key={index} className='Total-sub'>
                            <img src={item.image} alt='' />
                            <h1>{item.head}</h1>
                        </div>
                    ))
                }
            </div>
            }

            {type==='icecream' &&    <div className='icecream' style={{ gap: "50px" }}>
                {
                    icecream.map((item, index) => (
                        <div key={index} className='Total-sub'>
                            <img src={item.image} />
                            <h1>{item.head}</h1>
                        </div>
                    ))
                }
            </div>

            }
            { type==='milkshake' && <div className='milkshake' style={{ gap: "50px" }}>
                {
                    milkshake.map((item, index) => (
                        <div key={index} className='Total-sub'>
                            <img src={item.image} />
                            <h1>{item.head}</h1>
                        </div>
                    ))
                }
            </div>

            }
            
        </div>
    )
}

export default Total
