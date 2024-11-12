import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Home1 from "../Pages/Home1";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Careers from "../Pages/Careers";
import Cardcomponent from "./Card/Card";
import Mac from "../Pages/Mac";
import Iphone from "../Pages/Iphone";
import Applenav from "./Applenav/Applenav";
import Ccard from "./Ccard/Ccard";
import Ipad from "../Pages/Ipad";
import Iwatch from "../Pages/Iwatch";
import Airpod from "../Pages/Airpod";

function Routertest() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Cardcomponent />
        
        {/* <Home1/> */}
        <Routes>
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/applewatch" element={<Iwatch />} />
          <Route path="/airpods" element={<Airpod/>} />

          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routertest;
