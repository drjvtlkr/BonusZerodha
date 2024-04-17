import React, { useEffect } from "react";
import { Routes, Route , useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import OTP from "./pages/OTP";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/otp" element={<OTP/>}/>
      </Routes>
    </>
  );
};

export default App;
