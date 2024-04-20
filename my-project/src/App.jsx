import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OTP from "./pages/OTP";
import Dashboard from "./pages/navbarPages/Dashboard";
import Orders from "./pages/navbarPages/Orders";
import Holdings from "./pages/navbarPages/Holdings";
import Positions from "./pages/navbarPages/Positions";
import Bids from "./pages/navbarPages/Bids";
import Funds from "./pages/navbarPages/Funds";
import Statement from "./pages/navbarPages/Statements";
import { NavBar } from "./components/NavBars";
import CDashboard from "./pages/consolePages/Dashboard";
import Accounts from "./pages/consolePages/Accounts";
import Fund from "./pages/consolePages/Funds";
import Portfolio from "./pages/consolePages/Portfolio";
import Statements from "./pages/consolePages/Statement";
import Refund from "./pages/Refund";
import Layout from "./components/Layout";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTP />} />
        {/* <Routes> */}
        <Route path="/home/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="bids" element={<Bids />} />
          <Route path="funds" element={<Funds />} />
          <Route path="statement" element={<Statements />} />
        </Route>
        <Route path="console" element={<NavBar />}>
          <Route path="dashboard" element={<CDashboard />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="reports" element={<Refund />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="funds" element={<Fund />} />
          <Route path="funds/statement" element={<Statement/>}/>
        </Route>
      </Routes>


    </>
  );
};

export default App;
