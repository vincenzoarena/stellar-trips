import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { planets } from "../../assets/JSON/planetsObj.js";
import Loading from "../loading/Loading.jsx";
import { NavLink, useNavigate } from "react-router-dom";

import "./planet.css";

const Planet = () => {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);

  const [loadingComplete, setLoadingComplete] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", "/contacts", "/register", "/login", "/user");
  };

  useEffect(() => {
    function loadingComplete() {
      setLoadingComplete(true);
    }

    setTimeout(() => {
      loadingComplete();
    }, 10000);
  }, []);

  return (
    <>
      {loadingComplete ? (
        <>
          <div className="planet-wrapper">
            <div className="planet-box">
              <h1 className="planet-name">{`Welcome to ${planet.name}`}</h1>
              <div className="style">
                {planet.content.map((item, k) =>
                  item.img && item.text ? (
                    <div className={`planet-${planet.name + k} planet-info`}>
                      <img
                        src={process.env.PUBLIC_URL + item.img}
                        alt=""
                        className={`photo-${
                          planet.name + k
                        } photo-${k} planet-photo`}
                      />
                      <p>{item.text}</p>
                    </div>
                  ) : item.img ? (
                    <img
                      src={process.env.PUBLIC_URL + item.img}
                      alt=""
                      className={`photo-${
                        planet.name + k
                      } photo-${k} planet-photo`}
                    />
                  ) : (
                    <p>{item.text}</p>
                  )
                )}
              </div>{" "}
              <button className="planet-go-back-button">
                <NavLink to="/">Go back to planet selection</NavLink>
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Planet;
