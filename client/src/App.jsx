import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { SimpleSlider } from "./components/SimpleSlider/index.jsx";

import "./App.css";
import Header from "./components/header/Header";
//import Home from "./pages/home/Home";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts.jsx";
import Planet from "./components/planetDetail/Planet.jsx";
import Login from "./components/login/Login.jsx";
import SignIn from "./components/sign-in/Sign-in.jsx";
import Footer from "./components/footer/Footer.jsx";
import User from "./components/user/User.jsx";
import { AuthProvider } from "./context/authContext.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<SimpleSlider />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/planet/:name" element={<Planet />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
