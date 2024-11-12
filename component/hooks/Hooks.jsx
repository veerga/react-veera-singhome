import React, { useRef, useState, useEffect, Component } from "react";


const Hooks = () => {
  // const fref=useRef(null);
  // const state = usestate(123)
  // const [count,setcount]=useState(0);
  // const [msg,setmsg]=useState("initial message");

  const textfield = useRef("");
  const text1field = useRef("");
  const numberfield = useRef("");
  const number1field = useRef("");
  const Dobfield = useRef("");
  const [datas,setdatas]=useState("")

  const fsubmit = () => {
    // console.log("fuserefrunning.....>",fref.current.value);
    //  setfstate(fref.current.value);
    setdatas(textfield.current.value);
    setdatas(numberfield.current.value);
    setdatas(Dobfield.current.value);
    setdatas(text1field.current.value);
    setdatas(number1field.current.value);
   
  };

  useEffect(()=>{
       console.log("render")
  },[datas])

  

 
  //set timeout ,set interval,clear interval
  // useEffect(()=>{
  //     console.log('component mount/updated');
  //     console.log(msg);
  //     console.log('count is increased to',count)
  // },[count,msg])

  return (
    <div>
      <div>
        Name
        <input type="text" ref={textfield} placeholder="Name" />
        

      </div>
      <div>
        Age <input type="number" ref={numberfield} placeholder="Age" />{" "}
      </div>
      <div>
        Bob <input type="Date" ref={Dobfield} placeholder="Date of Birth" />{" "}
      </div>
      <div>
        Address <input type="text" ref={text1field} placeholder="Address" />{" "}
      </div>
      <div>
        Pincode <input type="" ref={number1field} placeholder="Pincode" />
      </div>
      <div>
        <button onClick={fsubmit}>submit</button>
      </div>
      <div> {textfield.current.value}</div>
      <div> {numberfield.current.value}</div>
      <div> {Dobfield.current.value}</div>
      <div> {text1field.current.value}</div>
      <div> {number1field.current.value}</div>
      
      


      {/* <button onClick={()=>{setcount(count + 1)}}>increase count</button>
          <p>the count value is:{count}</p>
          <button onClick={()=>{setmsg("msg updated on click event")}}>update message</button> */}

      {/* <p>you clicked {count} times</p>
          <button onClick={()=>setcount(count + 1)}>Click me</button> */}
    </div>
  );
};

export default Hooks;
