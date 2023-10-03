import React from 'react'
import './style.css';
import logo from '../images/logo.webp';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='topFooter'>
        <div className='logoFooter'>
          <img src={logo}/>
          <h2>Vital Vault</h2>
          <p>Your Partner in Healthcare Data Solutions.</p>
        </div>
      <div className='rightFooter'>
        <div className='linkFooter'>
          <div className='linkHeading'>
            <h2>Top Links</h2>
            <i class='bx bx-right-arrow-alt'></i>
          </div>
          <div className='links'>
            <a href='/'>
          <i class='bx bx-right-arrow-alt'></i>
          <h2 className='underlin'>About</h2>
          </a>
          </div>
          <div className='links'>
            <a href='/'>
          <i class='bx bx-right-arrow-alt'></i>
          <h2 className='underlin'>Privacy Policy</h2>
          </a>
          </div>
          <div className='links'>
            <a href='/'>
          <i class='bx bx-right-arrow-alt'></i>
          <h2 className='underlin'>License</h2>
          </a>
          </div>
        </div>
        <div className='socialFooter'>
          <div className='socialHeading'>
            <h2>Social Links</h2>
            <i class='bx bx-right-arrow-alt'></i>
          </div>
          <div className='socialLinks'>
            <div className='social underlin'><a href='/'><i class='bx bxl-instagram'></i></a></div>
            <div className='social underlin'><a href='/'><i class='bx bxl-facebook'></i></a></div>
            <div className='social underlin'><a href='/'><i class='bx bxl-twitter'></i></a></div>
          </div>
        </div>
      </div>
        
      </div>
      <hr className='hr'/>
      <div className='bottomFooter'>
        <p>@copyright | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer