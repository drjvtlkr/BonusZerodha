import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsoleNav from "./console/ConoleNav";
import { useLocation } from "react-router-dom";
import { Navbar } from "./components/navBar";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Dashboard from "./pages/navbarPages/Dashboard";
import Orders from "./pages/navbarPages/Orders";
import Holdings from "./pages/navbarPages/Holdings";
import Positions from "./pages/navbarPages/Positions";
import Bids from "./pages/navbarPages/Bids";
import Funds from "./pages/navbarPages/Funds";
import SideBarr from "./components/SideBarr";
import { NavBar } from "./components/NavBars";
import CDashboard from "./pages/consolePages/Dashboard";
import Accounts from "./pages/consolePages/Accounts";
import Fund from "./pages/consolePages/Funds";
import Portfolio from "./pages/consolePages/Portfolio";
import Reports from "./pages/consolePages/Reports";
import Statement from "./pages/navbarPages/Statements";
import Refund from "./pages/Refund";

const App = () => {
  const location = useLocation();
  const noNavBarPaths = [
    "/",
    "/otp",
    "/console/dashboard",
    "/console/funds",
    "/console/accounts",
    "/console/reports",
    "/console/portfolio",
    "/console/funds/statement",
    "/console/funds/option1",
    "/console/funds/option3",
    "/console/funds/option4",
    "/console/statement",
  ];
  const renderNavBar = !noNavBarPaths.includes(location.pathname);

  return (
    <>
      {/* {renderSidebar && <SideBar/>} */}
      {renderNavBar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/refund" element={<Refund />} />
        {/* <Routes> */}
        <Route path="/home/*" element={<SideBarr />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="bids" element={<Bids />} />
          <Route path="funds" element={<Funds />} />
          <Route path="statement" element={<Statement />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/console/*" element={<NavBar />} />
        <Route path="dashboard" element={<CDashboard />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="reports" element={<Reports />} />
        <Route path="porfolio" element={<Portfolio />} />
        <Route path="funds" element={<Fund />} />
        {/* <Route path="statement" element={<Statement/>}/> */}
      </Routes>
    </>
  );
};

export default App;
