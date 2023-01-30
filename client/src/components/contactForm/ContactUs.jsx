import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactUs.css"

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_covizir", "template_8fvfnz9", form.current, "G4kGUiKKgUPr6FOUG")
      .then((result) => {
          e.target.reset();
          console.log(result.text);
          console.log("Message sent!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form-box">
      <label className="contact-form-label-name">Name</label>
      <input type="text" name="user_name"  className="contact-form-input-name" placeholder="Please enter here your first and last name, thanks." />
      <label className="contact-form-label-email">Email</label>
      <input type="email" name="user_email" className="contact-form-input-email" placeholder="Please enter here your E-Mail address, thanks." />
      <label className="contact-form-label-message">Message</label>
      <textarea name="message" className="contact-form-text-message" placeholder="Please, enter here your message, thanks." />
      <input type="submit" value="Send" className="contact-form-input-send" />
    </form>
  );
};