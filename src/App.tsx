import React from "react";
import Home from "./pages/Dashboard";
import Navbar from "./pages/components/navbar";
import Registrations from "./pages/Registrations";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registrations" element={<Registrations />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
