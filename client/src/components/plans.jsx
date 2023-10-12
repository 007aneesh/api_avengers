import React from 'react'
import './style.css';
const Plans = ({next}) => {
  return (
    <div className='plans'>
      <div className='planHeading'>
        <h1>Choose the plan that fits your needs.</h1>
      </div>
      <div className='planInfo'>
        <div className='planData'>
          <div className='planBase'>Basic</div>
          <h1>Free</h1>
          <p>To discover our products and its fearures</p>
          <div className='planFeatures'>
            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>File Storage upto 500 MB</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited sharing upto 10 Documents</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited Viewing</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>No access to Specialist Doctors</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited Basic App features</p>
            </div>
          </div>
          <div className='planButton' onClick={()=>next(3)}>Continue</div>
        </div>
        <div className='planData gold'>
        <div className='planBase'>Gold</div>
          <h1>Rs.499 <span>per month</span></h1>
          <p>Best Option for Individual Users</p>
          <div className='planFeatures'>
            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>File Storage upto 3 GB</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>sharing upto 500 Documents</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Upto 10% Discounts</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited access to Specialist Doctors</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Basic App features</p>
            </div>
          </div>
          <div className='planButton' onClick={()=>next(3)}>Continue</div>
        </div>
        <div className='planData silver'>
        <div className='planBase'>Silver</div>
          <h1>Rs.999 <span>per month</span></h1>
          <p>Best suited for larger Organisations</p>
          <div className='planFeatures'>
            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>File Storage upto 500 MB</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited sharing upto 10 Documents</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited Viewing</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>No access to Specialist Doctors</p>
            </div>

            <div className='features'>
              <i className='bx bx-check-circle'></i>
              <p>Limited Basic App features</p>
            </div>
          </div>
          <div className='planButton' onClick={()=>next(3)}>Continue</div>
        </div>
      </div>
    </div>
  )
}

export default Plans