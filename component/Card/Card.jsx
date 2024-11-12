import React from "react";
import "./Card.css";
import c1 from "../../assets/mac.png";
import c2 from "../../assets/iphone.png";
import c3 from "../../assets/ipad.png";
import c5 from "../../assets/Screenshot 2024-04-24 181713.png";
import c4 from "../../assets/apple watch.png";
import c6 from "../../assets/air tag.png";
import c7 from "../../assets/apple tv.png";
import c8 from "../../assets/homepad.png";
import c9 from "../../assets/access.png";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

const Cardcomponent = () => {

   const font={font:hover,backgroundcolor:"red"}
  return (
    <div className="cardnav">

      
      <div>
        <img className="cardwors" src={c1} />
      <div style={font}><Link to={"/mac"}> Mac</Link> </div>
      </div>
      <div>
        <img className="cardwors" src={c2} />
      <div> <Link to={"/iphone"} >iphone</Link> </div>
      </div>
      <div><img className="cardwors" src={c3}/>
      <div><Link to={"/ipad"} >ipad</Link> </div>
      </div>
      <div><img className="cardwors" src={c4}/> 
      <div> <Link to={"/Applewatch"}>Applewatch</Link>  </div>
      </div>
      <div><img className="cardwors"  src={c5}/> 
      <div> <Link to={"/Airpods"}>Airpods</Link> </div>
      </div>
      <div><img className="cardwors" src={c6}/> 
      <div> <Link to={"/Airtag"}>Airtag</Link> </div>
      </div>
      <div><img className="cardwors"src={c7}/> 
      <div> <Link to={"/Apple TV 4K"}>Apple TV 4K</Link>  </div>
      </div>
      <div><img className="cardwors" src={c8}/> 
      <div> <Link to={"/Homepad"}>Homepad</Link> </div>
      </div>
      <div><img className="cardwors" src={c9}/> 
      <div> <Link to={"/Accessories"}>Accessories</Link></div>
      </div>



    </div>
  );
};

export default Cardcomponent;
