/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React, { Component } from 'react';
import Confetti from './Confetti';

const config = {
  angle: "38",
  spread: 360,
  startVelocity: "59",
  elementCount: "200",
  dragFriction: "0.11",
  duration: 3000,
  stagger: "5",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

export default class Activated extends Component{
  state = {
    activeStats: true
  }

  setActivated(){
    this.activeStats = true;
    console.log(this.state.activeStats)
  }
  

  render(){
    return (
      <button
        className="text-white"
        onClick={ () => this.setActivated(true) }
      >

        <Confetti
          className="loading-button__confetti"
          active={ this.activeStats }
          config={ config }
        />
          {"It's My Birthday! 🎉"}
      </button>
      )
}
}