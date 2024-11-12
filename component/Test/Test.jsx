import React, { useRef, useEffect, useState } from "react";
// import Hooks1 from "./component/Hooks1/Hooks1";

const Test = () => {
  const num1 = [10, 20, 30, 40, 30, 20, 50, 60, 50];
  const fruit = [
    "grapes",
    "mango",
    "apple",
    "orange",
    "apple",
  "pineapple",
    "orange",
    { name: "mani" },
    { age: "25" },
    { fruit1: "mango" },
    { fruit1: "graps" },
    { fruit1: "jack fruit" },
  ];

  const textfiled = useRef("");
  const numfiled = useRef("");
  const [deta, setdeta] = useState("");
  const [roll,setroll]=useState("0")
  const [over,setover]=useState("0")

  const click = () => {
    setdeta(textfiled.current.value);
    setdeta(numfiled.current.value);
  };

  // useEffect(()=>{

  // },[deta])
 const madhana=()=>{
    setTimeout(()=>{
      setroll("1")
    },1000)
    
    setTimeout(()=>{
      setroll("2")
    },2000)

    setTimeout(()=>{
      setroll("3")
    },3000)

    setTimeout(()=>{
      setroll("4")
    },4000)

    setTimeout(()=>{
      setroll("5")
    },5000)

    setTimeout(()=>{
      setroll("1 wedding anniversary get it precious madhanasshri")
    },10000)

    setTimeout(()=>{
      setroll("2 wedding anniversary family member for three")
    },15000)

    setTimeout(()=>{
      setroll("3 wedding anniversary carry for the health")
    },20000)
    setTimeout(()=>{
      setroll("4 wedding anniversary fight for the year")
    },25000)

    setTimeout(()=>{
      setroll("5 wedding anniversary one again precious baby famil member for four")
    },30000)
    setTimeout(()=>{
      setroll("happy advance congrats  V.HEMALATHA")
    },35000)
    
    }

    const hema=()=>{
      setInterval(()=>{
        setover("1")
      },2000)

      setInterval(()=>{
        setover("2")
      },4000)
      setInterval(()=>{
        setover("3")
      },6000)

      setInterval(()=>{
        setover("happy diwali")
      },8000)

      clearInterval(()=>{
        setover("thanks to watching")
      },10000)

      
    }
    

  return (
    <div>
      <div>
        <div>
          <button onClick={hema}>Gift</button>
          <h1>{over}</h1>
          <button onClick={madhana}>Click Me</button>
          <h1>{roll}</h1>
          name <input type="text" ref={textfiled} placeholder="name" />
          s.no <input type="number" ref={numfiled} placeholder="id no" />
        </div>
        <div>
          <button onClick={click}>Click me</button>
        </div>
        <div>{textfiled.current.value}</div>
        <div>{numfiled.current.value}</div>

        <div>
          {fruit.map((e,i) => {
            return (
              <div>
                <div>

                    <h6>{}</h6>
                  <h1>{e.name}{e.age}
                    </h1>
                </div>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default Test;
