import React from 'react'
import './Card.css'
import { BsThreeDots } from "react-icons/bs";
import { BiSolidUserCircle } from "react-icons/bi";
import { PiDotOutlineFill } from "react-icons/pi";
function Card({id,title,ind,status,tag}) {
  return (
    <div className='card'>
        <div className="one">
          <span className='idTag'>{id}</span>
          <BiSolidUserCircle id='icon1'/>
        </div>
        <p key={ind} className='titleTag'>{title}</p>
        <div className="last">
          <BsThreeDots className='brdr'/>
          <p className='tagTag'>
            < PiDotOutlineFill style={{fontSize:"25px"}}/>
            <p>{tag}</p>
          </p>
        </div>
        
    </div>
  )
}

export default Card