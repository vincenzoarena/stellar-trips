import React from "react";
import Slider from "react-slick";
import "./index.css";

import { Planet } from "../planet/Planet";
import { planets } from "../../assets/JSON/planetsObj.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SelectDropdown } from "../planetSelect/SelectDropdown";

export const SimpleSlider = () => {
  const settings = {
    className: "responsive",
    centerMode: true,
    padding: "1rem",
    autoplay: true,
    //dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    //fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: "unslick",
      },
    ],
  };

  return (
    <>
      <div className="searchbarContainer">
        <SelectDropdown />
      </div>
      <div className="what">
        <Slider {...settings} className={"single_planet"}>
          {planets.map((planet, i) => (
            <Planet planet={planet} key={i} />
          ))}
        </Slider>
      </div>
    </>
  );
};
