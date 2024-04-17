import React, { useEffect } from "react";
import { Routes, Route , useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import {NavBar} from "./components/navBar"

const App = () => {
  
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/otp" element={<OTP/>}/>
      </Routes>
    </>
  );
};

export default App;
