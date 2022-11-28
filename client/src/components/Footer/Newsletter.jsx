import React from 'react'

import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css'; 

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'></h1>
        <p className='p__opensans'>dont miss updates</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='enter email' /> 
        <button className='custom__button'>Sub</button>
      </div>
    </div>
  )
}

export default Newsletter