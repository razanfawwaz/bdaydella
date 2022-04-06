/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React, { useState, useRef, useEffect } from 'react';
import Confetti from 'react-confetti'
export default function ButtonConfetti(){
  
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [show, setShow] = useState(false);
  const [off, setOff] = useState(null);
  const [duration, setDuration] = useState(null);
  const confettiRef = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const handleShow = toggle => {
    setShow(toggle);
    setDuration (8000);
  }

  
  const isShow = () => {
    return true;
  }

    return (
      
      <button
        className="text-white tex"
        onClick={ () => handleShow(true)}
        ref={ confettiRef }
      >
        <Confetti 
          recycle={ show }
          numberOfPieces={ 50 }
          width = { width }
          height = { height }
          tweenDuration = {duration}
        />
          {"It's My Birthday! 🎉"}
      </button>
      )
}