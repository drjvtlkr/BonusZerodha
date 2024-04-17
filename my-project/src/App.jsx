import React, { useEffect } from "react";
import { Routes, Route , useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import OTP from "./pages/OTP";

const App = () => {

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [])
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/otp" element={<OTP/>}/>
      </Routes>
    </>
  );
};

export default App;
