/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Import your background image
import backgroundImage from "../img/signup.jpg"; // Replace with your actual image path
const Home = () => {
  return (
    <>
    hi
      <Carousel>
        <div>
          <img src={backgroundImage}  style={{ width: "50%", height:"50vh"}}/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Home;
