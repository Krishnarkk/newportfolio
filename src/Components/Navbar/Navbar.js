import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="nav-wrapper">
    <div className='left'>
        <div className='naam'>Krishna</div>
        <span>Toggle</span>
        </div>
        <div className='right'>
            <div className='list'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Experience</a></li>
                    <li><a href="">Projects</a></li>
                    
                </ul>
            </div>
            <button className='btn n-btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Navbar