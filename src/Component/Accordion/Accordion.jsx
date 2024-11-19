import React, { useState } from 'react'
import './Accordion.css'
const acco=[
    {
        Head:'Do you offer dairy-free or vegan options?',
        para:'Yes,we have both dairy-free and vegan.'
    },
    {
        Head:'What ingredients do you use in your ice cream?',
        para:'Milk,Natural flavours,sugar,Dryfruits.'
    },
    {
        Head:'Do you have gluten-free ice cream?',
        para:'Yes,our store contain gluten-free ice creams.'
    },
    {
        Head:'Can I book your store for private events?',
        para:'Yes,we supply for parties and marriages.'
    },
    {
        Head:'Do you have nutritional information available?',
        para:'Yes,we mention the nutritional information of each product.'
    },{
        Head:"Can I order ice cream online?",
        para:"Yes,You can order ice cream online."
    }
]
const Accordion = () => {
    const [component,setcomponet]=useState(null);
    function handleacco(index){
        setcomponet(index===component ? null : index)
        console.log(index)
    }
  return (
    <>
    <h2 className='accohead'>Frequently Asked <span>Questions</span></h2>
    <p className='accopara'>Some of the queries you want to know about us.</p>
    <div className='Acco'>
        {acco.map((item,index)=>(
            <div key={index} className='accordion'  onClick={()=>handleacco(index)} >
                <div>
                    <h1>{item.Head}</h1>
                </div>
                {component===index && <p>{item.para}</p>}
            </div>
        ))}
    </div>
    </>
  )
}

export default Accordion
