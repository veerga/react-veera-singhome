import react from "react";
import "./Appleheader.css";
import asd from '../../assets/mac.png'

const Appleheader = () => {
  return (
    
    <div className="header">
      <div className="header1">
        <h1>
          Store.
          <span className="headercr">
            The best way to buy the products you love.
          </span>
          </h1>
      </div>
      <div className="header2">
      <div>Need shopping help?</div>
        <div className="headercr1">Ask a specialist</div> 
      
      <div>Visit an Apple Store</div>
        <div className="headercr1">find one near you</div> 
      </div>
      </div>
  
  );
};

export default Appleheader;
