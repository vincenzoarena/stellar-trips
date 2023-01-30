import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'; 
import { planets } from "../../assets/JSON/planetsObj";
import "./selectDropdown.css";

export const SelectDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(planets);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (name) => {
    console.log("I got clicked", name);
    selectedItem === name ? setSelectedItem(null) : setSelectedItem(name);
    //useNavigate in here
    setOpen(false);
  };
  
  const navigate = useNavigate(); 
  
  const handleProceed = (e) => {
    //i want to keep the state and bring it 
    //to the package booking form
    e.preventDefault();
    if (selectedItem !== null) {
      navigate('../')
      
    }
  }

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem ? selectedItem : "Select your Planet"}
          <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item) => (
            <div
              className="dropdown-item"
              onClick={() => handleItemClick(item.name)}
              key={item.name}
              name={item.name}
            >
              <span
                className={`dropdown-item-dot ${
                  item.name === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="dropdown-proceed">
        <button type="submit" id="button-dropdown" onClick={handleProceed}>
          PROCEED
        </button>
      </div>
    </>
  );
};
