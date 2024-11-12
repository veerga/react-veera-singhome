import React from "react";
const Loop=()=>{
    const arr=[0,1,2,3,4,5,6,7,8,9];
    const bhu=[{name:'madi'},{age:32},{color:'black'}]
    const arr1=[
      "ford",
      "lamborghini",
      "mclaren",
      "tesla",
      "mini cooper",
      "volkswagan",
    ]
    return(
        <div>
          <h3>loop inside jsx</h3>
          {bhu.map((Data,i)=>(
            <h2 key={i}>{i+1} bhuvan family {Data.name},{Data.age},{Data.color}</h2>
          ))}
        </div>
      ); 
    };
export default Loop;    