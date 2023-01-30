import React from "react";
import "./contacts.css";
import { companyInfos } from "../../assets/JSON/companyInfos.js";
import { contacts } from "../../assets/JSON/contactsInfo.js";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { ImGithub } from "@react-icons/all-files/im/ImGithub";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { BsFillChatFill } from "@react-icons/all-files/bs/BsFillChatFill";
import { ContactUs } from "../contactForm/ContactUs.jsx";

const Contacts = () => {
  return (
    <>
      <div className="contacts-info-wrapper">
        <div className={`contacts-wrapper id${companyInfos.id}`}>
          {companyInfos.map((companyInfo, k) => (
            <div className="company-info">
              <img src={companyInfo.image} alt="" key={k} className="art" />
              <h2 className="company-info-name">{companyInfo.name}</h2>
              <div className="company-infos-links-wrapper">
                <a href={`mailto:${companyInfo.email}`}>
                  <MdEmail className="contacts-icon" />
                </a>
                <a
                  href={companyInfo.telephone}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPhoneAlt className="contacts-icon" />
                </a>
                <a
                  href={companyInfo.chat}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFillChatFill className="contacts-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={`contacts-wrapper id${contacts.id}`}>
          {contacts.map((contact, k) => (
            <div className="contact">
              <img src={contact.image} alt="" key={k} className="art" />
              <h2 className="contact-name">{contact.name}</h2>
              <div className="contacts-links-wrapper">
                <a href={`mailto:${contact.email}`}>
                  <MdEmail className="contacts-icon" />
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="contacts-icon" />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImGithub className="contacts-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="contact-form">
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Contacts;
