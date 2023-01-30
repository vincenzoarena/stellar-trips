import React from "react";
import { Link } from "react-router-dom";
import "./Planet.css";

// https://api.nasa.gov/planetary/apod?api_key=byb2SVHItXqFMSKowrZNpHv8Ufy2x2MWAbdvWtSe

//byb2SVHItXqFMSKowrZNpHv8Ufy2x2MWAbdvWtSe

export const Planet = ({ planet }) => {
  return (
    <>
      <div className={"slide"}>
        <h1>{`${planet.name}`}</h1>
        <Link to={`/planet/${planet.name.toLowerCase()}`}>
          <div className={"planet"}>
            <div className={"bg " + planet.name}></div>
          </div>
        </Link>
      </div>
    </>
  );
};
