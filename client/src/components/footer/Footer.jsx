import React from "react";
import "./footer.css";
import { NavLink, useNavigate } from "react-router-dom";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare";
import {FaSnapchatSquare} from "@react-icons/all-files/fa/FaSnapchatSquare";
import {FaTwitterSquare} from "@react-icons/all-files/fa/FaTwitterSquare";
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";
import {FaYoutubeSquare} from "@react-icons/all-files/fa/FaYoutubeSquare";
import {FaPinterestSquare} from "@react-icons/all-files/fa/FaPinterestSquare";
import {FaMastodon} from "@react-icons/all-files/fa/FaMastodon";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", "/contacts", "/register", "/login", "/user");
  };

  return (
    <footer className="footerBox">
      <div className="social">
        <NavLink to="/">
          <FaYoutubeSquare className="footer-icon" />
        </NavLink>
        <NavLink to="/">
          <FaTwitterSquare className="footer-icon" />
        </NavLink>
        <NavLink to="/">
          <FaMastodon className="footer-icon" />
        </NavLink>
        <NavLink to="/">
          <FaFacebookSquare className="footer-icon" />
        </NavLink>
        <NavLink to="/">
          <FaInstagramSquare className="footer-icon" />
        </NavLink>
        <NavLink to="/">
          <FaPinterestSquare className="footer-icon" />
        </NavLink>
        <NavLink to="/">
          <FaSnapchatSquare className="footer-icon" />
        </NavLink>
      </div>
      <ul className="footerList">
        <li>
          <NavLink to="/">Job Opportunities</NavLink>
        </li>
        <li>
          <NavLink to="/">Services</NavLink>
        </li>
        <li>
          <NavLink to="/">Terms & Conditions</NavLink>
        </li>
        <li>
          <NavLink to="/">Privacy Policy</NavLink>
        </li>
      </ul>
      <div className="credits">
        <h6>Copyright © 2022 STELLAR TRIPS Inc. All rights reserved.</h6>
      </div>
    </footer>
  );
}
