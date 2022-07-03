import React, { Component } from "react";
import "./About.css";
import thumbNail from "../assets/thumbNail.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={thumbNail}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Torrin Curry</div>
            <div className="brief_description">
              Hi, I'm Torrin Curry, a Computer Science Major at UGA. 
              I'm originally from the great city of Stone Mountain, GA
              In my free time, I like to play basketball with friends, and I really enjoy cars.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
