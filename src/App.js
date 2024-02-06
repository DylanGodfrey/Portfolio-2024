// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Router basename="/Portfolio-2024">
        <div>
          <Navigation />
          <Routes>
          <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
