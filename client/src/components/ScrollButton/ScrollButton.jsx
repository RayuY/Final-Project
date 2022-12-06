
import React from 'react'
import { useEffect, useState } from 'react'
import { RxDoubleArrowUp } from 'react-icons/rx'
import './ScrollButton.css'


const ScrollButton = () => {

  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
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
          <RxDoubleArrowUp size={15} />
        </button>)}
    </div>
  )


};

export default ScrollButton