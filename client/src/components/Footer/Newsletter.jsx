import React from 'react'

import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'; 

const Newsletter = () => {
  
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Dont Miss Updates" />
        <h1 className='headtext__cormorant'></h1>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='enter email' /> 
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter