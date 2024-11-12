import React, { useRef, useState } from "react";



const defaultdata = {
  name: "no name state",
  cm: "no name cm",
}
const State = (props) => {
  // probs - resuasble
  const stated = "kerala";

 
  const { statedata = defaultdata } = props;
  // de structure
  const { name, cm, aboutMe } = statedata;
  // console.log(aboutMe);

  return (
    <div className="stateclass">
     
      <div>india</div>
      <h5>india state for {name}</h5>
      {aboutMe.map((point,index)=> <div key={index}>{index+1}.{point}</div> )}
      
      {name === "westbengal" ? (
        <div>this is a state</div>
      ) : (
        <div>this not is a tamilnadu</div>
      )}
      <div>srilanka</div>
      <div>japan</div>
      <div>china</div>
      
      
    </div>
  );
};

export default State;
