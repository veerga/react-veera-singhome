import React, { useRef, useState } from "react";
import Hooks from "../hooks/Hooks";

const Use = (props) => {
  const firstRef = useRef(null);
  const [asd, setAsd] = useState("");

  const fla = "rose";
  const flower = { name: "jasmine", color: "white", place: "theni" };

  const { name, color, place, aboutMe } = props.flowers;

  const [dname, setdname] = useState(name); //rerender,ui chnage
  // setdname(lily)
  const handclick = () => {
    setdname(dname);
  };
  // ccs code below
  const doSumit = () => {
    console.log("test ----->", firstRef.current.value);
    setAsd(firstRef.current.value)
  };

  return (
    <div className="flowers">
      <div>
        <input ref={firstRef} type="text" />
        <button onClick={doSumit}>Submit</button>
        <div>{asd}</div>
      </div>
      <div>
        <h1>my favourte flowers {fla}</h1>
      </div>
      <div>
        <h2>my flowers details {name} </h2>
      </div>
      <button onClick={handclick}>State Info</button>
      {aboutMe.map((fla, i) => (
        <div key={i}>
          <h2>
            {i + 1}.{fla}
          </h2>
        </div>
      ))}

      <Hooks/>
    </div>
  );
};

export default Use;
