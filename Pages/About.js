import React, { useContext } from "react";
// import { usercontext } from "./Contact";
import Careers from "./Careers";
import { eusercontext } from "../component/Ecommerce";




function About() {
 
const value=useContext(eusercontext)
console.log(value)



  // const value=useContext(usercontext)
  // console.log(value)
  return (
    <div>p1<br></br>
    
       {value.name}:{value.desc}={value.price}
      {/* {value.fruitname}:{value.des}={value.price} */}
      {/* <h1><Careers/> </h1> */}
    </div>
  );
}

export default About;
