import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsoleNav from "./console/ConoleNav";

import { NavBar } from "./components/navBar";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Dashboard from "./pages/navbarPages/Dashboard";
import Orders from "./pages/navbarPages/Orders";
import Holdings from "./pages/navbarPages/Holdings";
import Positions from "./pages/navbarPages/Positions";
import Bids from "./pages/navbarPages/Bids";
import Funds from "./pages/navbarPages/Funds";
import SideBar from "./components/SideBar";

const App = () => {
  const location = useLocation();
  const noNavBarPaths = ["/", "/otp"];
  const noSideBarPaths = ["/", "/otp"];
  const renderNavBar = !noNavBarPaths.includes(location.pathname);
  const renderSidebar = !noSideBarPaths.includes(location.pathname)

  return (
    <>
      {renderSidebar && <SideBar/>}
      {renderNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/funds" element={<Funds />} />
        {/* <Route path="/side" element={<SideBar />} /> */}
      </Routes>
    </>
  );
};

export default App;
