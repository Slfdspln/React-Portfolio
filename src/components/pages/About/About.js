import React from "react";
import './About.css'
import hero from '../../../images/HeroImage.png'
import CardMedia from "@mui/material/CardMedia";


export default function About() {
  return (
    <>
      {/* <div id="hero">
        <img src={hero} />
      </div> */}
      <div className="image-container">
        <CardMedia
          component="img"
          className="color-img"
          style={{
            height: "auto",
            width: "50%",
            margin: "0 auto",
            paddingTop: "20px",
          }}
          image={hero}
          alt="About Me"
        />
      </div>

      <div style={{ width: "70%", margin: "0 auto" }}>
        <h1 id="about-me-title">About Me</h1>
        <p>
 Hi my name is Cristal
        </p>
        <p>
 2-2222        </p>
        <p>
          My free time consists mainly of adrenaline seeking activities, travel, and various hobbies picked up over the years such as scuba diving, skiing, and skydiving.
        </p>
        <p>
          I would love to connect!
        </p>
      </div>
    </>
  );
}