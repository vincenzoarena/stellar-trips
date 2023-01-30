import React from "react";
import "./foundersStory.css";
import { contacts } from "../../assets/JSON/contactsInfo";

const FoundersStory = () => {
  return (
    <>
      <div className="founders-story-wrapper-box">
        <div className={`founders-story-wrapper id ${contacts.id}`}>
          {contacts.map((contact, k) => (
            <div className="founders-story-box">
              <div className="founders-story-info">
                <img
                  src={contact.image}
                  alt={`${contact.name} portrait`}
                  className="founders-story-art"
                />
                <h2 className="founders-story-name">{contact.name}</h2>
              </div>
              <div className="founders-story-origin-box">
                <p className="founders-story-origin">{contact.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoundersStory;
