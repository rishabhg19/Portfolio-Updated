// src/App.js
import React from 'react';
import Background from './components/Background';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Experience from "./components/pages/Experience.jsx";
import Contact from "./components/pages/Contact.jsx";

const App = () => {
  return (
    <>
      <Background />
      <div className="background"></div>
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                  path="/Portfolio"
                  element={<Portfolio />}
              />
              <Route
                  path="/Experience"
                  element={<Experience />}
              />
              <Route
                  path="/Contact"
                  element={<Contact />}
              />
          </Routes>
      </Router>
      <div className="footer">Copyright © 2024 Rishabh Ganesh</div>
    </>
  );
};

export default App;
