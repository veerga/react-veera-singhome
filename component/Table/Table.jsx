import React, { useRef, useState } from "react";
import "./Table.css";

const Looptable = () => {
  const testRef = useRef(null)
  const testRef1 = useRef(null)
  const[inputarr,setInputdarr]=useState([])  
  const [inputdata, setInputdata] = useState({
    name: "",
    rollno: "",
  });

  function changehandle(e){
    console.log('testRef ----->',testRef.current.value)
    // setInputdata({ ...inputdata,[e.target.name]:e.target.value})
    console.log('testRef1 ----->',testRef1.current.value);
    setInputdarr([...inputarr,{name:testRef.current.value,rollno:testRef1.current.value}])

    // setInputdata({name:"",rollno:"",})
  }
  let{name,rollno}=inputdata;
  // function changehandle1(){
  //   setInputdarr([...inputarr,{name,rollno}])
  //   setInputdata({name:"",rollno:"",})

  // }
  function changehandle2(){

  }

  // let data=[
  //     {
  //       fname:'veera',
  //       lname:'pathran',
  //     },
  //     {
  //       fname:'chandra',
  //       lname:'singh',
  //     },
  //     {
  //       fname:'bhuvan',
  //       lname:'ganesh',
  //     },
  //   ];

  return (
    //   <div>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th>First name</th>
    //           <th>Last name </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {data.map((val,i) =>
    //           <tr key={i}>
    //             <td>{val.fname}</td>
    //             <td>{val.lname}</td>
    //           </tr>
    //           )
    //         }
    //       </tbody>
    //     </table>
    //   </div>
    <div className="Table">
      <input
      ref={testRef}
        type="text"
        autoComplete="on"
        name="name" 
        // value={inputdata.name}
        onchange={changehandle}
        placeholder="Enter name"
      />
      <input
      ref={testRef1}
        type="text"
        autoComplete="off"
        name="rollno"
        // value={inputdata.rollno}
        onchange={changehandle}
        placeholder="Rollno"
      />
      <button onClick={changehandle}>Add It</button>
      <button onClick={changehandle2}>Check Array in console</button>
      <table border={1} width='30%' cellPadding={10}>
        <tbody>
        <tr>
            <td>Name</td>
            <td>Roll no</td>
        </tr>
        {
            inputarr.map(
                (info,index)=>{
                  console.log()
                    return(
                        <tr key={index}>
                            <td>{info.name}</td>
                            <td>{info.rollno}</td>
                        </tr>

                    )
                }
            )
        }
        </tbody>
      </table>
    </div>
  );
};

export default Looptable;
