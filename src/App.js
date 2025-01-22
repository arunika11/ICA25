// App.jsx
import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Organization from "./pages/Organization";
import Footer from "./components/Footer";
import CallsPage from "./pages/Calls";
import VenuePage from "./pages/Venue";
import ProgramPage from "./pages/Program";
import SponsorShipPage from "./pages/Sponsorship";
import RegisterationPage from "./pages/Registeration";
import Gallery from "./pages/Gallery";
function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/calls" element={<CallsPage />} />
        <Route path="/venue" element={<VenuePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/sponsorship" element={<SponsorShipPage/>} />
        <Route path="/registeration" element={<RegisterationPage/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;