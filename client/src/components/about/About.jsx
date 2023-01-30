import React from "react";
import "./about.css";
import CompanyStory from "../companyStory/CompanyStory";
import FoundersStory from "../foundersStory/FoundersStory"


const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-title-container">
          <h1 className="about-title">Here you can learn more about us...</h1>
        </div>
        <div className="about-info">
          <CompanyStory />
          <FoundersStory />
        </div>
      </div>
    </>
  )
}

export default About
