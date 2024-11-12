import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import "./component/Grow/Grow.css";
import "./component/use/use.css";
import "./component/apple/Apple.css";
import "./component/Ccard/Ccard.css";
import Animal from "./component/Grow/Grow";
import State from "./component/Home";
import Looptable from "./component/Table/Table";
import Loop from "./component/Loop/Loop";
import Use from "./component/use/use";
import Apple from "./component/apple/Apple";
import Applenav from "./component/Applenav/Applenav";
import Appleheader from "./component/Appleheader/Appleheader";
import Cardcomponent from "./component/Card/Card";
import Ccard from "./component/Ccard/Ccard";
import cc1 from "./assets/img1.png";
import cc2 from "./assets/img2.png";
import cc3 from "./assets/img3.png";
import cc4 from "./assets/img4.png";
import cc5 from "./assets/img5.png";
import Hooks from "./component/hooks/Hooks";
import Hooks1 from "./component/Hooks1/Hooks1";
import Test from "./component/Test/Test";
import Routertest from "./component/Routertest";
import Ecommerce from "./component/Ecommerce";
import Datalist from "./Pages/Datalist";

import Contact from "./Pages/Contact";
import About from "./Pages/About";


function App() {
  const statedata1 = {
    name: "westbengal",
    cm: "mamtha banerjee",
    aboutMe: [
      "West Bengal is famous for its terracotta temples of Bishnupur",
      "Hazarduari Palace, a tourist attraction",
      "known to have the second largest chandelier",
      "in the world and also the largest staircase in India.",
    ],
  };

  const statedata2 = {
    name: "delhi",
    cm: "arvind kenrival",
    aboutMe: [
      "Besides its architecture",
      "Delhi is known for its natural beauty and parks.",
      "One such park is the Lodhi Garden",
      "Covering over 90 acres of land, it features.",
    ],
  };

  const flowers1 = {
    name: "jasmine",
    color: "white",
    place: "theni",
    aboutMe: [
      "The name Jasmine is of Persian origin, meaning  gift from God",
      " It is derived from the Persian word yasmin, referring to the plant",
      "meaning fragrant flower Origin: Jasmine is a Persian name meaning ",
      "gift from God or fragrant flower Gender: Jasmine is commonly used as a girl name",
    ],
  };

  const asd = [
    {
      name1: "IPHONE 15",
      name2: "Newphoria",
      name3: "From 3329.00/mo. for 24 mo.with No Cost EMI or 79900.00",
      img: cc1,
    },
    {
      name1: "MACBOOK AIR",
      name2: "Designed to go  places.",
      name3: "From 99900.00",
      img: cc2,
    },
    {
      name1: "IPHONE 15 PRO",
      name2: "Titanium",
      name3: "From 5621.00/mo. for 24 mo.with No Cost EMI or 134900.00",
      img: cc3,
    },
    { name1:"APPLE WATCH SERIES9",
      name2:"Smarter.Brighter.Mightier.",
      name3: "From 41900.00",
      img:cc4,

    },

    // { name1:"IPAD",
    //   name2:"Loveable.Drawable.Magical",
    //   name3: "From 39900.00",
    //   img:cc5,
    // },
    
  ];

  return (
    <div>
      {/* hi welcome veera react class<div className="class1">IT CLASS</div> */}

      {/* <State statedata={statedata1} /> 
      <State statedata={statedata2}/> */}

      {/* <Animal /> */}
      {/* <Tree /> */}
      {/* <Looptable /> */}
      {/* <Loop /> */}
      {/* <Use flowers={flowers1}/> */}
       {/* <Apple />   */}
      {/* <Applenav /> */}
      {/* <Appleheader /> */}
      {/* <Cardcomponent /> */}
      
      
     
       {/* <Hooks/>  */}
      {/* <Hooks1/> */}
      <Test/>
      {/* <Datalist/> */}
      {/* <Contact/> */}
      {/* <About/> */}
      
       {/* <Routertest/> */}
       {/* <Ecommerce/> */}
       
    </div>
  );
}

const Tree = () => {
  return (
    <div className="class1">
      <div>mango tree</div>
      <div>gauva tree</div>
      <div>drumstick tree</div>
      <div>papayaa tree</div>
    </div>
  );
};

export default App;
