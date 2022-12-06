import React from "react";
import "./Modal.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ImCross } from 'react-icons/im'

function Modal({ setOpenModal }) {

  const images = [
    "https://resizer.otstatic.com/v2/photos/xlarge/1/49683960.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/2/50206397.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/50206396.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/25199900.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/25199901.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/25199903.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/25199909.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/26220423.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/1/26322694.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/3/41701228.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/2/41701232.jpg",
    "https://resizer.otstatic.com/v2/photos/xlarge/2/41701235.jpg",
  ];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <ImCross />
          </button>
        </div>
        <div className="body">
          <Slide transitionDuration='500' >
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[getRandomInt(10)]})` }}>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[getRandomInt(10)]})` }}>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[getRandomInt(10)]})` }}>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[getRandomInt(10)]})` }}>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[getRandomInt(10)]})` }}>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>

  );
}

export default Modal;