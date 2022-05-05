import React from 'react'
import crown from '../../img/crown.png';
import './Float.css'
const Float = ({Image,txt1,txt2}) => {
  return (
    <div className='floats'>
        <img src={Image}/>
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default Float