import React, { useState } from "react";
import "./sign-in.css";
import axios from "./../../util/axiosApiInstance.js";
export const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/register", {
        firstName,
        lastName,
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //Outer container to define flex properties
    <div className="outer-container">
      <div className="auth-form-container">
        <h2>Sign up</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            htmlFor="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label>Last Name</label>
          <input
            htmlFor="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="budspencer@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
          <label htmlFor="password">Repeat password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />
          <button type="submit" id="button">
            {/* I think here we have to refer to other page like user or Home with the name  */}
            Sign up
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Already registered? Proceed to login.
        </button>
      </div>
    </div>
  );
};

export default SignIn;
