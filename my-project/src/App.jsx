import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsoleNav from "./console/ConoleNav";


const App = () => {
  return (
    <>
   <Router>
   <Routes>
        <Route path="" element={<ConsoleNav />}/>
      </Routes>
   </Router>
     
     
    </>
  );
};

export default App;
