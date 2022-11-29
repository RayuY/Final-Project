import React from 'react'
import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import './ScrollButton.css'


const ScrollButton = () => {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setBackToTop(true)
      } else {
        setBackToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      {backToTop && (
        <button className='ScrollButton'
        onClick={scrollUp}
        > 
        <BiArrowFromBottom />
        </button> )}
    </div>
  )


};

export default ScrollButton