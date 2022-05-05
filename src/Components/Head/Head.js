import React from 'react'
import './Head.css';
import Git from '../../img/github.png';
import linkedin from '../../img/linkedin.png';
import Insta from '../../img/instagram.png';
import mine from '../../img/Krish.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import thumbsup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import emoji from '../../img/glassesimoji.png'
import Float from '../Floating/Float';
const Head = () => {
  return (
    <div className='heading'>
        <div className='h-left'>
         <div className='h-name'>
             <span>Hii I AM</span>
             <span>Krishna</span>
             <span>Frontend Developer having hands on experience and sound 
                 knowledge on UI/UX created lot of personal projects
             </span>

         </div>
         <button className='btn h-btn'>Download CV</button>
         <div className='h-icon'>
           <a href="">  <img src={Git}/></a>
             <a href=""><img src={Insta}/></a>
             <a href=""><img src={linkedin}/></a>
         </div>
        </div>
        <div className='h-right'>
            <img src={Vector1}/>
            <img src={Vector2}/>
            <img src={mine}/>
            <img src={emoji}/>
           <div style={{top:'-4%',left:'68%'}}>
             <Float Image={crown} txt1="Web" txt2="Developer"/>
           </div>
           <div style={{top:'18rem',left:'-10rem'}}>
             <Float Image={thumbsup} txt1="Good" txt2="Knowledge"/>
           </div>
           <div className='blur' style={{background:'#f7bdd6'}} ></div>
           <div className='blur' style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}} ></div>
          
        </div>

    </div>
  )
}

export default Head